import { createBrowserRouter } from "react-router-dom";
import * as Components from "../index/indexComponents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Components.MainLayout />,
    errorElement: <Components.Error404 />,
    children: [
      {
        index: true,
        element: <Components.Home />,
      },
      {
        path: "profile",
        element: <Components.Profile />,
      },
      {
        path: "contact",
        element: <Components.Contact />,
      },
      // {
      //   path: "about",
      //   element: <Components.About />,
      // },
    ],
  },
]);
