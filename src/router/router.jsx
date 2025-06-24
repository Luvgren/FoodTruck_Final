import { createBrowserRouter } from "react-router-dom";
import Menu from "../page/menu";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
    }
])
export default router;