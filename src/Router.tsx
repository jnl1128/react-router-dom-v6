import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./screens/About";
import Home from "./screens/Home";
import Root from "./Root";
// function Router() {
//     return (
//         <BrowserRouter>
//             <Header />
//             <Routes>
//                 <Route path="/" element={<Home />}></Route>
//                 <Route path="/about" element={<About />}></Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }

// Router를 array 형식으로 표현할 수 있게 해줌.
// url: /about이면
// Root가 먼저 render하고
// About이 render함.
// Outlet을 내가 render하고자 하는 route로 바꿔서 render함.
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
]);
export default router;
