"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type ReactNode } from "react";

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
      <input type="checkbox" value="dark" className="theme-controller toggle" />
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

export default function Navbar({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const router = useRouter();

  function ResponsiveMenu() {
    return (
      <ul
        tabIndex={0}
        className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
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
          <button
            className={
              pathName === "/woman" || pathName === "/" ? "active" : ""
            }
            onClick={() => router.push("/")}
          >
            Woman
          </button>
        </li>
        <li>
          <Link className={pathName === "/man" ? "active" : ""} href={"/man"}>Man</Link>
         
        </li>
        <li>
        <Link className={pathName === "/kid" ? "active" : ""} href={"/kid"}>Kid</Link>
         
        </li>
        <li>
        <Link className={pathName === "/baby" ? "active" : ""} href={"/baby"}>Baby</Link>
         
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

      <div className="navbar-end">{children}</div>
    </div>
  );
}
