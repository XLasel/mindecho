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
import { AddEntryPage } from "./components/pages/AddEntryPage";
import { EntryPage } from "./components/pages/EntryPage";
import { EditEntryPage } from "./components/pages/EditEntryPage";
import store from "./redux/store";
import { Provider } from "react-redux";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<Layout />}>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/diary" element={<DiaryPage />}>
//         <Route path="add" element={<AddEntryPage />} />
//         {/* <Route path="/:id" element={<EntryPage />}>
//           <Route path="/edit" element={<EditEntryPage />} />
//           <Route path="/quick-view" element={<QuickViewModal />} />
//         </Route> */}
//       </Route>
//       <Route path="*" element={<div>Not found</div>} />
//     </Route>
//   )
// );
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage />, errorElement: <div>Not found</div> },

      { path: "/diary", element: <DiaryPage /> },
      { path: "/diary/add", element: <AddEntryPage /> },
      {
        path: "/diary/:id",
        element: <EntryPage />,
      },
      { path: "/diary/:id/edit", element: <EditEntryPage /> },
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
