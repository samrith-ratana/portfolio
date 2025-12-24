import Link from "next/link";
import { cookies } from "next/headers";
import { authService } from "@/modules/services/auth.service"; // Your file
import { experienceService } from "@/modules/services/experience.service";
import { deleteExperienceAction } from "@/modules/actions/experience.actions";

export default async function Dashboard() {
  // 1. Fetch Data Server-Side
  const accessToken = (await cookies()).get("accessToken")?.value;
  if (!accessToken) return <div>Please log in</div>;
  
  const user = await authService.getMe(accessToken);
  const experiences = await experienceService.getByUserId(user.id);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Work Experience</h2>
        <Link 
          href="/dashboard/edit/new" 
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          + Add Experience
        </Link>
      </div>

      <div className="grid gap-4">
        {experiences.length === 0 && (
          <div className="text-center py-12 text-gray-400">No experiences added yet.</div>
        )}

        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                <p className="text-gray-500 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-400 mt-1">
                  {exp.startDate} - {exp.endDate || "Present"}
                </p>
              </div>
              <div className="flex space-x-2">
                <Link 
                  href={`/dashboard/edit/${exp.id}`}
                  className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
                >
                  Edit
                </Link>
                <form action={deleteExperienceAction.bind(null, exp.id)}>
                  <button className="px-3 py-1 text-sm text-red-500 hover:text-red-700">Delete</button>
                </form>
              </div>
            </div>
            <p className="mt-4 text-gray-600 line-clamp-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}