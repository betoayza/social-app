import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/pure/NavBar";

export const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <main className={"container"}>
        <Outlet />
      </main>
      <footer className="fixed-bottom" style={{ color: "white" }}>
        @ 2023 betoayza | Copyright
      </footer>
    </div>
  );
};
