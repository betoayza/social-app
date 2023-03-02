import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/pure/NavBar";

export const MainLayout = () => {
  return (
    <div className={""}>
      <div className={""}>
        <NavBar />
      </div>
      <main className={"container"} style={{ marginBottom: "50px" }}>
        <Outlet />
      </main>
      <footer className="fixed-bottom text-center" style={{ color: "black" }}>
        @ 2023 betoayza | Copyright
      </footer>
    </div>
  );
};
