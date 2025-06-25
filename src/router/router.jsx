import { createBrowserRouter } from "react-router-dom";
import Menu from "../page/menu";
import Cart from "../page/cart";
import Confirm from "../page/confirm";
import Orders from "../page/orders";
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
    },
    {
        path: "/confirm",
        element: <Confirm />,
    },
    {
        path: "/orders",
        element: <Orders />,
    }
])
export default router;