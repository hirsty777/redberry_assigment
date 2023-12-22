import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";

const router:RouteObject[] = [
    {
        element:<Home />,
        path:"/"
    },
    {
        element:<Blog />,
        path:"blog/:id"
    }
]

export default router