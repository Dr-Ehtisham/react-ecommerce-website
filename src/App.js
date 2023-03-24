import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { createBrowserRouter, Outlet, Route, RouterProvider, Routes, ScrollRestoration } from "react-router-dom";
import Cart from "./pages/Cart";
import { productsData } from "./api/Api";
import Product from "./components/Product";
import Login from "./pages/Login";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Home />,
        loader: productsData,
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/login',
        element: <Login />
      },
  ],
  },
]);

function App() {
  return (
  <div className="font-bodyFont">
  {/* <Layout >
    <Routes>
      <ScrollRestoration />
      <Route path="/" loader={productsData} element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />

    </Routes>

  </Layout> */}
  
    <RouterProvider router={router} />
  </div>

  );
}

export default App;
