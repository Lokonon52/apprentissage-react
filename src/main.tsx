
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./pages/About.tsx"; // à créer
import Messages from "./pages/Messages.tsx"; // à créer
import Routes from "./pages/Routes.tsx";
import { Users } from "./pages/Users.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    children: [
      {
        index: true, // équivalent à path: "/"
        element: <Users />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);