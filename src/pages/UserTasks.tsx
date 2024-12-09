import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actClearTasks, actGetUsersTasks } from "../store/users/usersTasksSlice";
import { useNavigate } from "react-router-dom";
import { actLogout } from "../store/Auth/authSlice";
import TasksTable from "../components/Task/TaskTable"

export default function Tasks() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { tasks, error } = useAppSelector((state) => state.tasks);

  // Fetch tasks on component mount
  useEffect(() => {
   const promise =  dispatch(actGetUsersTasks());
    return () => {
      dispatch(actClearTasks());
      promise.abort();
    }
  }, [dispatch]);

  useEffect(() => {
    if(error === "Invalid token. Please log in again."){
      localStorage.removeItem('auth');
      dispatch(actLogout());
      setTimeout(()=>{
        navigate('/login');
      }, 2000)
    }
  }, [navigate, error, dispatch]);
  console.log('fire task page');
  

  if(error){
    return <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
      <p>{error}</p>
    </div>
  } 
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">My Tasks</h1>
    <TasksTable tasks={tasks} />
  </div>
);
}
