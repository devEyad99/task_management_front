
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mainlayout from '../layouts/Mainlayout/Mainlayout';
import ErrorHandler from '../pages/Error';
import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import Users from '../pages/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout />,
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'tasks',
        element: <Tasks />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
