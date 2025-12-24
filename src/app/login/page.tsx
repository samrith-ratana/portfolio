"use client"; // 1. Must be a Client Component to use hooks

import { useFormState } from "react-dom"; // 2. Import the hook
import { loginAction } from "@/modules/actions/experience.actions";

export default function LoginPage() {
  // 3. Initialize the hook. 'state' will contain the return value from the action (e.g., { error: "..." })
  const [state, formAction] = useFormState(loginAction, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Sign in</h2>
        
        {/* 4. Use formAction here */}
        <form action={formAction} className="space-y-6">
          
          {/* 5. Display Error Message if it exists */}
          {state?.error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center">
              {state.error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input name="email" type="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input name="password" type="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}