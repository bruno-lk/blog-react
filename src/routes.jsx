import { createBrowserRouter } from "react-router";
import { RootLayout } from "./views/RootLayout";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { Description } from "./views/Description";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/description",
        element: <Description />,
      },
      {
        path: "/blog_1",
        element: <p>texto do blog 1</p>,
      },
      {
        path: "/blog_2",
        element: <p>texto do blog 2</p>,
      },
      {
        path: "/blog_3",
        element: <p>texto do blog 3</p>,
      },
      {
        path: "/blog_4",
        element: <p>texto do blog 4</p>,
      },
    ],
  },
]);
