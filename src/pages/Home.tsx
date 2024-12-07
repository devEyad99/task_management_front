
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { actGetAllTasks } from '../store/users/usersTasksSlice';
import TasksTable from '../components/Task/TaskTable';
import { actLogout } from '../store/Auth/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { tasks, error, loading, totalTasks, totalPages } = useAppSelector(
    (state) => state.tasks
  );

  const [isBtnOpen, setIsBtnOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if(error === "Invalid token. Please log in again.")
    {
      localStorage.removeItem('auth');
      dispatch(actLogout());
      setTimeout(()=>{
        navigate('/login');
      }, 2000)
    }
  }, [navigate, dispatch, error])

  // Fetch tasks when `currentPage` changes
  useEffect(() => {
    if (isBtnOpen) {
      dispatch(actGetAllTasks({ page: currentPage }));
    }
  }, [dispatch, currentPage, isBtnOpen]);

  // Toggle button logic
  const toggleBtn = () => {
    setIsBtnOpen((prev) => !prev);

    // Reset to the first page when reopening
    if (!isBtnOpen) setCurrentPage(1);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">All Tasks</h1>
      <button
        className={`px-4 py-2 rounded mb-4 ${
          isBtnOpen ? 'bg-red-500' : 'bg-blue-500'
        } text-white`}
        onClick={toggleBtn}
      >
        {isBtnOpen ? 'Show Less' : 'Get All Tasks'}
      </button>
      {loading === 'pending' && <p>Loading...</p>}
      {error && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
          role="alert"
        >
          <p>{error}</p>
        </div>
      )}
      {isBtnOpen && (
        <div>
          <TasksTable tasks={tasks} />
          <div className="flex items-center justify-center gap-4 mt-4">
            {/* Pagination buttons */}
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              &lt; Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next &gt;
            </button>
          </div>
          <div className="mt-4 text-center">
            <p>
              Showing {tasks.length} of {totalTasks} tasks
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
