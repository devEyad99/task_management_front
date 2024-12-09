
import { useNavigate } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout/PageLayout';

export default function Home() {

  const navigate = useNavigate();

  return (
    <PageLayout title='Manage Tasks'>
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
    </PageLayout>
  );
}
