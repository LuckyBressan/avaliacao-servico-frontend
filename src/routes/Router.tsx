import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Avaliacao from "../pages/Avaliacao";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Avaliacao /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
