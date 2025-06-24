import { createBrowserRouter } from "react-router-dom";
import Menu from "../page/menu";
import Cart from "../page/cart";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
    },
    {
        path: "/menu",
        element: <Menu />,
    },
    {
        path: "/cart",
        element: <Cart />,
    }
])
export default router;