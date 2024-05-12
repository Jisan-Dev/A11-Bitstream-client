import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '@/pages/homepage/Home';
import AddBlog from '@/pages/add-blog/AddBlog';

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
        element: <AddBlog />,
      },
    ],
  },
]);

export default router;
