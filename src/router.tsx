import { createBrowserRouter } from "react-router-dom";
import Skills from "./components/Skills";
import App from "./App";
import MovingSkills from "./components/MovingSkills";
import Events from "./components/Events";
import Home from "./components/Home";
import { Allprojects } from "./components/AllProjects";
// import path from "path";

const router = [
    {
        element: <Skills />,
        path: "/skills",
    },

    {
        element: <App />,
        path: "/",
        children: [
            {
                element: <Home />,
                path: "",
            },

            {
                element: <Allprojects />,
                path: "/projects",
            },
        ],
    },
    {
        element: <App />,
        path: "/portfolio",
    },
    {
        element: <MovingSkills />,
        path: "/tools",
    },
    {
        element: <Events />,
        path: "/events",
    },
];

export const rootRouter = createBrowserRouter(router);
