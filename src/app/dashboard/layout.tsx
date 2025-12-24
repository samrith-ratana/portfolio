import { logoutAction } from "@/modules/actions/experience.actions";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-indigo-600 mb-8">DevResume</h1>
          <nav className="space-y-2">
            <a href="/dashboard" className="block px-4 py-2 rounded-md bg-indigo-50 text-indigo-700 font-medium">
              Experiences
            </a>
            {/* Add more links like Education, Skills here */}
          </nav>
        </div>
        <form action={logoutAction}>
          <button className="w-full text-left px-4 py-2 text-gray-600 hover:text-red-600">
            Sign Out
          </button>
        </form>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}