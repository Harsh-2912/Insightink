import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import News from './components/News'
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='' element={<App />} />
      <Route path='general' element={<News category={'general'}/>} />
      <Route path='science' element={<News category={'science'}/>} />
      <Route path='technology' element={<News category={'technology'}/>} />
      <Route path='entertainment' element={<News category={'entertainment'}/>} />
      <Route path='sports' element={<News category={'sports'}/>} />
      <Route path='health' element={<News category={'health'}/>} />
    </>
  )
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
