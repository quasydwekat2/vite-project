import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Layout/Root';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import LoginPage from './Pages/LoginPage.jsx';
import RegisterPage from './Pages/RegisterPage';
import NotFound from "./Pages/NotFound.jsx"

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
      { path: 'Login', element: <LoginPage /> },
      { path: 'Register', element: <RegisterPage /> },

      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
