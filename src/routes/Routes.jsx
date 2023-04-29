import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layOuts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/category/Category";
import NewsLayout from "../layOuts/NewsLayout";
import News from "../Pages/News/news/News";
import Login from "../Pages/Login/login/Login";
import LoginLayout from "../layOuts/LoginLayout";
import Register from "../Pages/Login/login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path:'/',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element: <Navigate to="/category/0"> </Navigate>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            },
            {
                path:'terms',
                element:<Terms></Terms>
            }
        ]
    },
    {
        path:'category',
        element:<Main></Main>,
        children:[
            
            {
                path:":id",
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;