import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "../pages/Create";
import ItemList from "../pages/ItemList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Detail from "../pages/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/product/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
