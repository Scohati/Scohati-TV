// AppRouter.tsx
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../views/Home";
import Contato from "../views/Contato";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
