import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "project/:projectId", element: <Project /> },
]);

export default router;
