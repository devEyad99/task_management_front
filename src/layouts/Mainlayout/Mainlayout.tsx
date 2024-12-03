import React from 'react';
import { Header, Footer } from "../../components/common";
import { Outlet } from "react-router-dom";

export default function Mainlayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mt-16 lg:mt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}