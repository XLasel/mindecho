import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./global.scss";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "@components/pages/HomePage/index.tsx";
import { DiaryPage } from "@components/pages/DiaryPage/index.tsx";
import { AddNotePage } from "./components/pages/AddNotePage";
import { NotePage } from "./components/pages/NotePage";
import { EditNotePage } from "./components/pages/EditNotePage";
import store from "./redux/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage />, errorElement: <div>Not found</div> },

      { path: "/diary", element: <DiaryPage /> },
      { path: "/diary/add", element: <AddNotePage /> },
      {
        path: "/diary/:id",
        element: <NotePage />,
      },
      { path: "/diary/:id/edit", element: <EditNotePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
