import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Extras from "./pages/Extras";
import Home from "./pages/Home";
import Teas from "./pages/Teas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/extras",
    element: <Extras />,
  },
  {
    path: "/teas",
    element: <Teas />,
  },
  
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
