import {createBrowserRouter} from "react-router-dom"

import Layout from "../layout"
import Home from "../pages/home"
import ProductDetail from "../pages/product-detail"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {path: "/", element: <Home />},
            {path: "/phone/:id", element: <ProductDetail />},
        ],
    },
 
])
