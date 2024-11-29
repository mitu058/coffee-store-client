import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../Layout/Home";
import App from "../App";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:5000/coffee')
            },
            

            {
                path: "/allcoffee",
                element: <App></App>,
                loader:()=> fetch('http://localhost:5000/coffee')
              },
              {
                path:'/addCoffee',
                element:<AddCoffee></AddCoffee>
              },
              {
                path:'/updateCoffee/:id',
                element:<UpdateCoffee></UpdateCoffee>,
                loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
              },
              {
                path:'/login',
                element:<Login></Login>
              },
              {
                path:'/register',
                element:<Register></Register>
              }
        ]
        
    },

   
])

export default router;