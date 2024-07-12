import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

// import "./fonts.scss";
import "./global.scss";

import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/components/pages/HomePage/index.tsx";
import { DiaryPage } from "@/components/pages/DiaryPage/index.tsx";
import { DiaryEntry } from "@/components/pages/DiaryPage/DiaryEntry";
import { NoteEditorLayout } from "@/components/pages/DiaryPage/NoteEditorLayout";
import NotFoundPage from "@/components/pages/NotFoundPage";
import ValidateSearchParams from "@/components/common/ValidateSearchParams";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage />, errorElement: <div>Not found</div> },

      {
        path: "/diary",
        element: <ValidateSearchParams />,
        children: [
          { index: true, element: <DiaryPage /> },
          { path: "add", element: <NoteEditorLayout /> },
          {
            path: ":id",
            element: <DiaryEntry />,
          },
          { path: ":id/edit", element: <NoteEditorLayout /> },
          { path: "404", element: <NotFoundPage /> },
        ],
      },
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
