
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mainlayout from '../layouts/Mainlayout/Mainlayout';
import ErrorHandler from '../pages/Error';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import UserProfile from '../pages/UserProfile';
import Tasks from '../pages/Tasks';
import { Protected } from '../components/common/Protected/Protucted';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout />,
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        element: 
        <Protected>
          <Home />
        </Protected>
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
        path: 'tasks',
        element: <Tasks />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
