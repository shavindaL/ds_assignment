import Link from "next/link";
import SearchBar from "./search";

import { UseLogout } from "@/hooks/userLogout";
import { useAuthContext } from "@/hooks/userAuthContext";

export default function Navbar() {
  const { logout } = UseLogout();

  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <>
      <nav
        className="relative flex w-full flex-wrap items-center justify-between bg-green-10 py-3 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <button
            className="block border-0 bg-transparent py-2 px-2.5 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent4"
            aria-controls="navbarSupportedContent4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent4"
            data-te-collapse-item
          >
            <a className="pr-2 text-xl font-semibold text-white" href="#">
              Logo
            </a>
            {/* <!-- Left links --> */}
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li className="p-2" data-te-nav-item-ref>
                <Link
                  className="text-white disabled:text-black/30 lg:px-20 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <SearchBar />
              </li>
            </ul>
            {/* <!-- Left links --> */}

            {/* <!-- Collapsible wrapper --> */}

            <div>
              {user && (
                <div>
                  <span>{user.email}</span>
                  <button onClick={handleClick}>LOG OUT</button>
                </div>
              )}
            </div>

            {/* <!-- Right elements --> */}
            {!user && (
              <div class="relative flex items-center">
                <ul
                  class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                  data-te-navbar-nav-ref
                >
                  <li class="p-2" data-te-nav-item-ref>
                    <Link
                      className="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                      href="/login"
                    >
                      Log In
                    </Link>
                  </li>
                  <li class="p-2" data-te-nav-item-ref>
                    <Link
                      href={"/signup"}
                      className="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {/* <!-- Right elements --> */}
          </div>
        </div>
      </nav>
    </>
  );
}
