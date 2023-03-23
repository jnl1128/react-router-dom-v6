import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./screens/About";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/users/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
                errorElement: <ErrorComponent />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "users/:userId",
                element: <User />,
                // :userId를 children으로 계층화하지 않은 이유
                // users 만을 위한 컴포넌트를 따로 만들어야 하는데
                // 그걸 의도한 것이 아니기 때문.
            },
        ],
        errorElement: <NotFound />,
    },
]);
export default router;
