import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddPage from '../pages/AddPage';
import ProductPage from '../pages/ProductPage';

export const router = createBrowserRouter([
  {
    path: '/addnew',
    element: <AddPage />,
  },

  {
    path: '/',
    element: <ProductPage />,
  },
]);
