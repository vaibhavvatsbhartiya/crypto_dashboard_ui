import './App.css';
import Dashboard from './Pages/dashboard/Dashboard';
import {  createBrowserRouter, RouterProvider, } from "react-router-dom";
import Support from './Pages/support/Support';
import Transaction from './Pages/transaction/Transaction';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>
  },
  {
    path: "/support",
    element: <Support/>
  },
  {
    path: "/transaction",
    element: <Transaction/>
  },
]);

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
