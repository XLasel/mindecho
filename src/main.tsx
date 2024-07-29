import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ValidateSearchParams } from '@/components/common/ValidateSearchParams';
import { Layout } from '@/components/layout/Layout';
import { DiaryPage } from '@/components/pages/DiaryPage';
import { DiaryEntry } from '@/components/pages/DiaryPage/DiaryEntry';
import { NoteEditorLayout } from '@/components/pages/DiaryPage/NoteEditorLayout';
import { HomePage } from '@/components/pages/HomePage';
import { NotFoundPage } from '@/components/pages/NotFoundPage';
import { UsefulMaterialsPage } from '@/components/pages/UsefulMaterialsPage';
import { UsefulMaterialTemplate } from '@/components/pages/UsefulMaterialsPage/UsefulMaterialTemplate';
import { ROUTES } from '@/constants';
import store from '@/redux/store';

import './global.scss';

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: ROUTES.HOME, element: <HomePage /> },
        {
          path: ROUTES.DIARY,
          element: <ValidateSearchParams />,
          children: [
            { index: true, element: <DiaryPage /> },
            { path: ROUTES.DIARY_ADD, element: <NoteEditorLayout /> },
            { path: ROUTES.DIARY_ENTRY(':id'), element: <DiaryEntry /> },
            { path: ROUTES.DIARY_EDIT(':id'), element: <NoteEditorLayout /> },
          ],
        },
        {
          path: ROUTES.USEFUL_MATERIALS,
          children: [
            { index: true, element: <UsefulMaterialsPage /> },
            {
              path: ROUTES.MATERIALS_ENTRY(':id'),
              element: <UsefulMaterialTemplate />,
            },
          ],
        },
        { path: ROUTES.NOT_FOUND, element: <NotFoundPage /> },
      ],
    },
  ],
  {
    basename: '/mindecho/',
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
