import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Body from './components/Body';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
const Instamart = lazy(()=>import('./components/Instamart/Instamart'));
const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,  // AppLayout is the global wrapper that includes the Header
      children: [
          {
              path: "/",
              element: <Body />  // Landing page
          },
          {
              path: "about",
              element: <About />  // About page
          },
          {
              path: "contactus",
              element: <ContactUs />  // Contact Us page
          },{
            path: "restaurants/:resId",
            element: <RestaurantMenu />
          },
          {
            path: "instamart",
            element:<Suspense fallback={<div>Loading...</div>}><Instamart/></Suspense>
          },
      ],
      errorElement: <Error />  // Error page for undefined routes
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
 
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
