import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: <h1>about</h1>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
