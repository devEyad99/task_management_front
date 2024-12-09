// import { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../store/hooks";
// import { actLogout } from "../store/Auth/authSlice";
// import { useNavigate } from "react-router-dom";
// import { actGetAllTasks } from "../store/users/usersTasksSlice";
// import TasksTable from "../components/Task/TaskTable";
// import PageLayout from "../layouts/PageLayout/PageLayout";



// // export default function AllTasks() {
// //   const dispatch = useAppDispatch();
// //   const navigate = useNavigate();
// //   const [currentPage, setCurrentPage] = useState(1);

// //   const { tasks, error, loading, totalTasks, totalPages } = useAppSelector(
// //     (state) => state.tasks
// //   );

// //   useEffect(() => {
// //     if (error === "Invalid token. Please log in again.") {
// //       localStorage.removeItem("auth");
// //       dispatch(actLogout());
// //       setTimeout(() => {
// //         navigate("/login");
// //       }, 2000);
// //     }
// //   }, [navigate, dispatch, error]);

// //   useEffect(() => {
// //     dispatch(actGetAllTasks({ page: currentPage }));
// //   }, [dispatch, currentPage]);

// //   return (
// //     <div className="h-screen flex flex-col bg-gray-50">
// //       {/* Fixed Header */}
// //       <header className="bg-white p-4 shadow-md sticky top-0 z-10">
// //         <h1 className="text-2xl font-bold text-gray-800">All Tasks</h1>
// //       </header>

// //       {/* Scrollable Content */}
// //       <main className="flex-1 overflow-y-auto p-4 md:p-8">
// //         {loading === "pending" && <p>Loading...</p>}
// //         {error && (
// //           <div
// //             className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
// //             role="alert"
// //           >
// //             <p>{error}</p>
// //           </div>
// //         )}
// //         <TasksTable tasks={tasks} />
// //         <div className="flex items-center justify-center gap-4 mt-4">
// //           {/* Pagination buttons */}
// //           <button
// //             className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
// //             disabled={currentPage === 1}
// //             onClick={() => setCurrentPage((prev) => prev - 1)}
// //           >
// //             &lt; Previous
// //           </button>
// //           <span>
// //             Page {currentPage} of {totalPages}
// //           </span>
// //           <button
// //             className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
// //             disabled={currentPage === totalPages}
// //             onClick={() => setCurrentPage((prev) => prev + 1)}
// //           >
// //             Next &gt;
// //           </button>
// //         </div>
// //         <div className="mt-4 text-center">
// //           <p>
// //             Showing {tasks.length} of {totalTasks} tasks
// //           </p>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }



// export default function AllTasks() {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState(1);

//   const { tasks, error, loading, totalTasks, totalPages } = useAppSelector(
//     (state) => state.tasks
//   );

//   useEffect(() => {
//     if (error === "Invalid token. Please log in again.") {
//       localStorage.removeItem("auth");
//       dispatch(actLogout());
//       setTimeout(() => {
//         navigate("/login");
//       }, 2000);
//     }
//   }, [navigate, dispatch, error]);

//   useEffect(() => {
//     dispatch(actGetAllTasks({ page: currentPage }));
//   }, [dispatch, currentPage]);

//   return (
//     <PageLayout title="All Tasks">
//        {loading === "pending" && <p>Loading...</p>}
//         {error && (
//           <div
//             className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
//             role="alert"
//           >
//             <p>{error}</p>
//           </div>
//         )}
//         <TasksTable tasks={tasks} />
//         <div className="flex items-center justify-center gap-4 mt-4">
//           {/* Pagination buttons */}
//           <button
//             className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((prev) => prev - 1)}
//           >
//             &lt; Previous
//           </button>
//           <span>
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage((prev) => prev + 1)}
//           >
//             Next &gt;
//           </button>
//         </div>
//         <div className="mt-4 text-center">
//           <p>
//             Showing {tasks.length} of {totalTasks} tasks
//           </p>
//         </div>
//     </PageLayout>
  
//   );
// }


import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actLogout } from "../store/Auth/authSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { actGetAllTasks } from "../store/users/usersTasksSlice";
import TasksTable from "../components/Task/TaskTable";
import PageLayout from "../layouts/PageLayout/PageLayout";

export default function AllTasks() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current page from URL or default to 1
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const { tasks, error, loading, totalTasks, totalPages } = useAppSelector(
    (state) => state.tasks
  );

  useEffect(() => {
    if (error === "Invalid token. Please log in again.") {
      localStorage.removeItem("auth");
      dispatch(actLogout());
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [navigate, dispatch, error]);

  useEffect(() => {
    dispatch(actGetAllTasks({ page: currentPage }));
  }, [dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <PageLayout title="All Tasks">
      {loading === "pending" && <p>Loading...</p>}
      {error && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
          role="alert"
        >
          <p>{error}</p>
        </div>
      )}
      <TasksTable tasks={tasks} />
      <div className="flex items-center justify-center gap-4 mt-4">
        {/* Pagination buttons */}
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &lt; Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next &gt;
        </button>
      </div>
      <div className="mt-4 text-center">
        <p>
          Showing {tasks.length} of {totalTasks} tasks
        </p>
      </div>
    </PageLayout>
  );
}
