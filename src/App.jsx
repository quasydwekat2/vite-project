import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Layout/Root';
import Home from './Pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        index: true,
        element: <Home />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        element: <Home />,
      },

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
