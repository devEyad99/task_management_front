import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actGetUsersTasks } from "../store/users/usersTasksSlice";
import TasksTable from "../components/Task/TaskTable";
import PageLayout from "../layouts/PageLayout/PageLayout";

export default function UserProfile() {
  const { user } = useAppSelector((state) => state.auth);
  const { tasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actGetUsersTasks());
  }, [dispatch]);

  return (

    <PageLayout title="My Profile">
       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24">
          <img
              src={`http://localhost:3001${user?.profile_image}` || "/default-profile.png"}
              alt={`${user?.name}'s Profile`}
              className="w-full h-full object-cover rounded-full"
            />

          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{user?.name}</h1>
            <p className="text-sm text-gray-600">{user?.email}</p>
            <p className="mt-2 px-2 py-1 bg-gray-200 text-gray-800 rounded inline-block">
              Role: {user?.role}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600">User ID: {user?.id}</p>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Assigned Tasks</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <TasksTable tasks={tasks} />
        </div>
      </div>
    </PageLayout>
  );
}
