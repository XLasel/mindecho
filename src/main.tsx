import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ValidateSearchParams } from "@/components/common/ValidateSearchParams";
import { Layout } from "@/components/layout/Layout";
import { DiaryEntry } from "@/components/pages/DiaryPage/DiaryEntry";
import { DiaryPage } from "@/components/pages/DiaryPage/index.tsx";
import { NoteEditorLayout } from "@/components/pages/DiaryPage/NoteEditorLayout";
import { HomePage } from "@/components/pages/HomePage/index.tsx";
import { NotFoundPage } from "@/components/pages/NotFoundPage";
import store from "@/redux/store";

import "./global.scss";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage />, errorElement: <div>Not found</div> },

      {
        path: "/diary",
        // element: <DiaryProvider />,
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
