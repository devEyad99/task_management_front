// AppRouter.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mainlayout from '../layouts/Mainlayout/Mainlayout';
import ErrorHandler from '../pages/Error';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import UserProfile from '../pages/UserProfile';
import UserTasks from '../pages/UserTasks';
import { Protected } from '../components/common/Protected/Protucted';
import AllTasks from '../pages/AllTasks';
import CreateTasks from '../pages/CreateTasks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout />,
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        element: (
          <Protected>
            <Home />
          </Protected>
        )
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'user-profile',
        element: <UserProfile />,
      },
      {
        path: 'user-tasks',
        element: <UserTasks />,
      },
      {
        path: 'all-tasks',
        element: (
          <Protected>
            <AllTasks />
          </Protected>
        ),
      },
      {
        path: 'create-task',
        element: (
          <Protected>
            <CreateTasks/>
          </Protected>
        ),
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
