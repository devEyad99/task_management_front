import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actGetAllTasks } from "../store/users/usersTasksSlice";
import TasksTable from "../components/Task/TaskTable";

export default function Home() {
  const dispatch = useAppDispatch();
  const { tasks, error, loading } = useAppSelector((state) => state.tasks);
  const [isBtnOpen, setIsBtnOpen] = useState(false);

  // Fetch tasks only once when the component mounts
  useEffect(() => {
    dispatch(actGetAllTasks());
  }, [dispatch]);

  // Toggle button logic
  const toggleBtn = () => {
    setIsBtnOpen((prev) => !prev);
  };

  useEffect(() => {
    console.log("Home component rendered");
  }, []);

  useEffect(() => {
    console.log("State updated", { tasks, error, loading });
  }, [tasks, error, loading]);

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">All Tasks</h1>
      <button
        className={`px-4 py-2 rounded mb-4 ${
          isBtnOpen ? "bg-red-500" : "bg-blue-500"
        } text-white`}
        onClick={toggleBtn}
      >
        {isBtnOpen ? "Show Less" : "Get All Tasks"}
      </button>
      {loading === "pending" && <p>Loading...</p>}
      {error && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
          role="alert"
        >
          <p>{error}</p>
        </div>
      )}
      {isBtnOpen && <TasksTable tasks={tasks} />}
    </div>
  );
}
