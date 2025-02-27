import React from "react";
import { Link } from "react-router-dom";

const navItemClass = "font-bold";

export default function Header() {
  return (
    <header className="bg-white border-b border-indigo-900 text-indigo-900">
      <div className="flex items-center justify-between max-w-[1080px] mx-auto text-[1.1em] px-[40px]">
        <div>
          <Link className="font-bold text-3xl" to={"/"}>H.Minhyeok</Link>
        </div>
        <div>
          <nav className="flex gap-[60px] py-[30px] items-center ">
            <Link to={ "/profile" } className={navItemClass}>프로필</Link>
            <Link to={ "/projects" } className={navItemClass}>프로젝트</Link>
            {/* <Link to={ "/portfolios" } className={navItemClass}>포트폴리오</Link> */}
          </nav>
        </div>
      </div>
    </header>
  );
}