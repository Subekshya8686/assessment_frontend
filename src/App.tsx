import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/login";
import React from "react";
import Home from "./pages/home";


const router  =createBrowserRouter(
    [
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/home",
            element:<Home />
        }
        // {
        //     path:"/login_register",
        //     element:<LoginRegister/>
        // },
    ]
)

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
