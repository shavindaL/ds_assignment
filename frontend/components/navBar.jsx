import Link from "next/link";
import { UseLogout } from "@/hooks/userLogout";
import { useAuthContext } from "@/hooks/userAuthContext";
import dynamic from "next/dynamic";


const SearchBar = dynamic(() => import("@/components/search"), {
  ssr: false
})



import userprofileDropdown from "@/components/userprofileDropdown";

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
              <li>
                <Link href={"../cart"}>
                  <svg className="mx-auto mt-4 ml-36 bg-g" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={30} fill="#E5E7EB">
                    {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </Link>
              </li>
            </ul>
            {/* <!-- Left links --> */}

            {/* <!-- Collapsible wrapper --> */}

            <div>
              {user && (
                <div>
                  {/* <span>{user.email}</span> */}
                  <h1>email -</h1>
                  <userprofileDropdown email={user.email}></userprofileDropdown>
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
