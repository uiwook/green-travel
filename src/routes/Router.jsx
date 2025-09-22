import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Main from "../conponents/Main.jsx";
import FestivalList from "../conponents/festivals/FestivalList.jsx";
import FestivalShow from "../conponents/festivals/FestivalShow.jsx";
import StayList from "../conponents/stayList/StayList.jsx";
import StayShow from "../conponents/stayList/StayShow.jsx";

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
      {
        path: '/festivals/:id',
        element: <FestivalShow />,
      },
      {
        path: '/lodgment',
        element: <StayList />,
      },
      {
        path: '/lodgment/:id',
        element: <StayShow />,
      },
    ],
  }
]);

function Router() {
  return <RouterProvider router={router} />
}

export default Router;