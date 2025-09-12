import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Main from "../conponents/Main";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
    ],
  }
]);

function Router() {
  return <RouterProvider router={router} />
}

export default Router