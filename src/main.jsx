import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
// import Homepage from './pages/Homepage';
import Services from './pages/services';
import AboutUs from './pages/AboutUs ';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import "./index.css";
import Homepage from './pages/Homepage';







const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/blog-in", element: <Blogs /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/gallery-in", element: <Gallery /> },

    ],
  },
]);





createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
