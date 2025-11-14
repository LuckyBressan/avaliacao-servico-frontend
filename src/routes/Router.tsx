import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Avaliacao from "../pages/Avaliacao";
import NotFound from "../pages/NotFound";
import TelaErro from "../components/TelaErro";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Avaliacao />, errorElement: <TelaErro /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
