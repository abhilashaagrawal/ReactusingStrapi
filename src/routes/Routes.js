//1 import area

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

//2 defination
export const routes=[
    {
        path:"",
        element:<Home />
    },
    {
        path:"login",
        element:<Login />
    },
    {
        path:"register",
        element:<Register />
    }
];