import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Main from './pages/Main.tsx';
import MainLayout from './layouts/MainLayout.tsx';
import LoadingPage from './pages/Loading.tsx';

const router = createBrowserRouter([{
  path: '/',
  element: <LoadingPage />,
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  </React.StrictMode>,
)
