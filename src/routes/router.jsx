import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '@/pages/homepage/Home';
import AddBlog from '@/pages/add-blog/AddBlog';
import Login from '@/pages/authentications/Login';
import SignUp from '@/pages/authentications/SignUp';
import PrivateRoute from './PrivateRoute';
import ErrorPage from './ErrorPage';
import BlogDetails from '@/pages/blog-details/BlogDetails';
import UpdateBlog from '@/pages/update-blog/UpdateBlog';
import AllBlogs from '@/pages/all-blogs/AllBlogs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: '/blog-details/:id',
        element: (
          <PrivateRoute>
            <BlogDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/update-blog/:id',
        element: (
          <PrivateRoute>
            <UpdateBlog />
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
      {
        path: '/all-blogs',
        element: <AllBlogs />,
      },
    ],
  },
]);

export default router;
