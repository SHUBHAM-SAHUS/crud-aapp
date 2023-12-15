import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddPage from './pages/AddPage';
import ProductPage from './pages/ProductPage';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
