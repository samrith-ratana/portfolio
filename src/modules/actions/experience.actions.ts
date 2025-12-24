"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { authService } from "@/modules/services/auth.service"; 
import { experienceService } from "@/modules/services/experience.service";
import { CreateExperienceDTO } from "@/modules/dtos/experience.dto";

// --- Auth Actions ---


// 1. Add 'prevState: any' as the first argument
export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const result = await authService.login(email, password);

    (await cookies()).set("accessToken", result.tokens.accessToken, { httpOnly: true, path: "/" });
    (await cookies()).set("refreshToken", result.tokens.refreshToken, { httpOnly: true, path: "/" });
  } catch (error) {
    // 2. Return the error object
    return { error: "Invalid credentials" };
  }

  // 3. Redirect must happen OUTSIDE the try/catch (if successful)
  redirect("/dashboard");
}

export async function logoutAction() {
  const refreshToken = (await cookies()).get("refreshToken")?.value;
  if (refreshToken) await authService.logout(refreshToken);
  
  (await cookies()).delete("accessToken");
 (await cookies()).delete("refreshToken");
  redirect("/login");
}

// --- Experience Actions ---

async function getAuthUserId() {
  const token = (await cookies()).get("accessToken")?.value;
  if (!token) throw new Error("Not authenticated");
  try {
    const user = await authService.getMe(token);
    return user.id;
  } catch (e) {
    throw new Error("Invalid token");
  }
}

/**
 * FIXED: 'id' is now the FIRST argument.
 * This allows .bind(null, id) to work correctly.
 * The form will automatically pass 'formData' as the LAST argument.
 */
export async function saveExperienceAction(id: string | undefined, formData: FormData) {
  const userId = await getAuthUserId();
  
  const data: CreateExperienceDTO = {
    title: formData.get("title") as string,
    company: formData.get("company") as string,
    startDate: formData.get("startDate") as string,
    endDate: formData.get("endDate") as string,
    description: formData.get("description") as string,
  };

  if (id) {
    await experienceService.update(id, userId, data);
  } else {
    await experienceService.create(userId, data);
  }

  redirect("/dashboard");
}

export async function deleteExperienceAction(id: string) {
  const userId = await getAuthUserId();
  await experienceService.delete(id, userId);
  redirect("/dashboard");
}