import { experienceService } from "@/modules/services/experience.service";
import { saveExperienceAction } from "@/modules/actions/experience.actions";

interface PageProps {
  // params is now a Promise
  params: Promise<{
    id: string;
  }>;
}

export default async function EditExperiencePage(props: PageProps) {
  // 1. Await the params before using them
  const params = await props.params;
  
  const isNew = params.id === "new";
  let data = null;

  if (!isNew) {
    data = await experienceService.getById(params.id);
  }

  // 2. Use the awaited 'params.id' here
  const updateWithId = saveExperienceAction.bind(null, isNew ? undefined : params.id);

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {isNew ? "Add New Experience" : "Edit Experience"}
      </h2>

      <form action={updateWithId} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
            <input 
              name="title" 
              defaultValue={data?.title}
              required 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
            <input 
              name="company" 
              defaultValue={data?.company}
              required 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input 
              type="date" 
              name="startDate" 
              defaultValue={data?.startDate}
              required 
              className="w-full px-4 py-2 border rounded-lg outline-none" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <input 
              type="date" 
              name="endDate" 
              defaultValue={data?.endDate}
              className="w-full px-4 py-2 border rounded-lg outline-none" 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea 
            name="description" 
            rows={5} 
            defaultValue={data?.description}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Describe your responsibilities and achievements..."
          ></textarea>
        </div>

        <div className="flex justify-end space-x-3 pt-4 border-t">
          <a href="/dashboard" className="px-6 py-2 rounded-lg text-gray-600 hover:bg-gray-100">Cancel</a>
          <button type="submit" className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-medium">
            Save Experience
          </button>
        </div>
      </form>
    </div>
  );
}