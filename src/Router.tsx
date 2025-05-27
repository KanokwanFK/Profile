import { createBrowserRouter } from "react-router-dom";
import LayoutApp from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const Router = createBrowserRouter([
    {
        path: "/",
        element:<LayoutApp/>,
        children:[
            {
               index: true,
               element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            }

        ]
    }
]);

export default Router;