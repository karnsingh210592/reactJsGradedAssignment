import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {App} from "./App"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {MoviePage} from "./components/MoviePage";

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: '/movies/:title',
    element: <MoviePage />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
