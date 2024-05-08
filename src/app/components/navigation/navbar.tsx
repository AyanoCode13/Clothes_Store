"use client"
import { usePathname } from "next/navigation";
import { type Dispatch, ReactNode, type SetStateAction, useState } from "react";


function ThemeSwitcher() {
  return (
    <label className="flex cursor-pointer gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <input type="checkbox" value="dark" className="toggle theme-controller" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
}

function NavbarItem({ isActive, setIsActive, title }:{ isActive:boolean, setIsActive:Dispatch<SetStateAction<boolean>>, title:string}){
  if(isActive){
    return (
      <li>
        <a className="active">{title}</a>
      </li>
    )
  }
  return (
    <li>
      <a onClick={()=>setIsActive(true)}>{title}</a>
    </li>
  )
}


export default function Navbar({children}:{children:ReactNode}) {
  const pathName = usePathname();
  
  function ResponsiveMenu() {
    return (
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
       
        <li>
          <details>
            <summary>Man</summary>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
  
      </ul>
    );
  }
  
  function MainMenu() {
    return (
      <ul className="menu menu-horizontal px-1">
        <li>
          <a className={pathName === "/" || pathName==="/woman" ? "active":""} href="/">Woman</a>
        </li>
        <li>
          <details>
            <summary>Man</summary>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a className={pathName === "/kid" ? "active":""} href="/kid">Kid</a>
        </li>
        <li>
          <a>Baby</a>
        </li>
      </ul>
    );
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ResponsiveMenu />
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
        <ThemeSwitcher />
      </div>
      <div className="navbar-center hidden lg:flex">
        <MainMenu />
      </div>

      <div className="navbar-end">
       {children}
      </div>
    </div>
  );
}
