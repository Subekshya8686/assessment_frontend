import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/login";
import "./pages";

const router  =createBrowserRouter(
  [
      {
          path:"/login",
          element:<Login/>
      },
      {
          path:"/",
          element:<home/>
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
