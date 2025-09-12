import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Main from "../conponents/Main.jsx";
import FestivalList from "../conponents/festivals/FestivalList.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/festivals',
        element: <FestivalList />,
      },
    ],
  }
]);

function Router() {
  return <RouterProvider router={router} />
}

export default Router