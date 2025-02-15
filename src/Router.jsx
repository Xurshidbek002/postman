// import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
// import Home from "./Pages/Home";

// export const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//     ],
//   },
// ]);

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
// import Login from "./Components/Login";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
