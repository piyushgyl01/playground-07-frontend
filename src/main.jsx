import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Todos from "./pages/Todos.jsx";
import TodoDetails from "./pages/TodoDetails.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/todos/:title/:todoID",
        element: <TodoDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
