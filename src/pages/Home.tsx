
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Tasks</h1>
      <div>
      <button
        className="px-4 py-2 rounded bg-blue-500 text-white mb-4"
        onClick={() => navigate('/all-tasks')}
      >
        Get All Tasks
      </button>
      </div>
      <div>
      <button
        className="px-4 py-2 rounded bg-green-500 text-white mb-4"
        onClick={() => navigate('/create-task')}
      >
        Create Task
      </button>
      </div>
    </div>
  );
}
