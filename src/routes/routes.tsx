import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import AddBlog from "../pages/AddBlog";

const router:RouteObject[] = [
    {
        element:<Home />,
        path:"/"
    },
    {
        element:<Blog />,
        path:"blog/:id"
    },
    {
        element:<AddBlog />,
        path:"addBlog"
    }
]

export default router