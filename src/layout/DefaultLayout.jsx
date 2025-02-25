import React from "react";
import Header from "../component/Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-auto bg-stone-100 flex justify-center">
          <div className="bg-white py-[100px] px-[40px] basis-[1080px] grow-0 shrink-1">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}