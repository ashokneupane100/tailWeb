import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RootLayout from './components/RootLayout';
import HomePage from './pages/HomePage';
import Class1 from './pages/Class1';
import Card1 from './pages/Card1';




const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'about-page',
          element: <AboutPage />
        },
        {
          path: 'contact-page',
          element: <ContactPage />
        },
        {
          path: 'class1',
          element: <Class1 />
        },
        {
          path: 'card1',
          element: <Card1 />
        },
      ]
    },



  ]);



  return <RouterProvider router={router} />
}

export default App