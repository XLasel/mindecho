import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "@fontsource-variable/inter/slnt.css";
import "@fontsource/bad-script";

import store from "./redux/store";

import "./global.scss";

import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/components/pages/HomePage/index.tsx";
import { DiaryPageLayout } from "@/components/pages/DiaryPage/DiaryPageLayout";
import { DiaryPage } from "@/components/pages/DiaryPage/index.tsx";
import { DiaryEntry } from "@/components/pages/DiaryPage/DiaryEntry";
import { NoteEditorLayout } from "@/components/pages/DiaryPage/NoteEditorLayout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage />, errorElement: <div>Not found</div> },

      {
        path: "/diary",
        element: <DiaryPageLayout />,
        children: [
          { index: true, element: <DiaryPage /> },
          { path: "add", element: <NoteEditorLayout /> },
          {
            path: ":id",
            element: <DiaryEntry />,
          },
          { path: ":id/edit", element: <NoteEditorLayout /> },
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
