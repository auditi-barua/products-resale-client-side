import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Shop from "../../Pages/Shop/Shop";
import Products from "../../Pages/Products/Products";
import Cart from "../../Pages/Cart/Cart";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/',
                element: <Category></Category>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <div>404 error page</div>
            }
        ]
    }
])
export default router;