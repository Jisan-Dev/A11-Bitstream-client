import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '@/pages/homepage/Home';
import AddBlog from '@/pages/add-blog/AddBlog';
import Login from '@/pages/authentications/Login';
import SignUp from '@/pages/authentications/SignUp';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/add-blog',
        element: (
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
