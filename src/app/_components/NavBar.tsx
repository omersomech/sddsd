import React from "react";
import navigationLinks from "../utils/navigationLinks";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

const NavBar = async () => {
  const session = await getServerAuthSession();
  console.log(session);
  let ancriName: string | undefined;
  if (session != null && session.user != null && session.user.name != null) {
    const userName = session.user.name?.split(" ");
    if (userName != null && userName.length > 1) {
      const firstLetter = userName[0].charAt(0);
      const firstFamilyLetter = userName[1].charAt(0);
      ancriName = firstLetter + firstFamilyLetter;
    }
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
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {navigationLinks.map((link, index) => (
              <li key={index}>
                {!link.subLinks ? (
                  <Link href={link.url}>{link.title}</Link>
                ) : (
                  <details>
                    <summary>{link.title}</summary>
                    <ul className="p-2">
                      {link.subLinks.map((subLink, index) => (
                        <li key={index}>
                          <Link href={subLink.url}>{subLink.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Malam-Gemel</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              {!link.subLinks ? (
                <Link href={link.url}>{link.title}</Link>
              ) : (
                <details>
                  <summary>{link.title}</summary>
                  <ul className="p-2">
                    {link.subLinks.map((subLink, index) => (
                      <li key={index}>
                        <Link href={subLink.url}>{subLink.title}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="form-control mr-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>{" "}
        <kbd className="kbd kbd-sm">ctrl</kbd>+
        <kbd className="kbd kbd-sm">K</kbd>
        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className={`avatar btn btn-circle btn-ghost ${
              ancriName ? "online" : null
            } placeholder`}
          >
            <div className="w-16 rounded-full bg-neutral text-neutral-content">
              <span className="text-xl">{ancriName ? ancriName : "un"}</span>
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
                {session ? "logout" : "login"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
