import Link from "next/link";

export default function Sidebar() {
  return (
    /* Start of Sidebar for seller */
    <>
      {/* <body class="dark:bg-zinc-800 [&>*]:leading-[1.6]"> */}

      <nav
        id="full-screen-example"
        className="fixed top-0 left-0 z-[1035] h-screen w-[239px] 
                -translate-x-full overflow-hidden bg-green-10 
                shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] 
                dark:bg-green-10 md:data-[te-sidenav-hidden='false']:translate-x-0"
        data-te-sidenav-init
        data-te-sidenav-mode-breakpoint-over="0"
        data-te-sidenav-mode-breakpoint-side="sm"
        data-te-sidenav-hidden="false"
        data-te-sidenav-color="dark"
        data-te-sidenav-content="#content"
        data-te-sidenav-scroll-container="#scrollContainer"
      >
        <div className="flex justify-center pt-6 mt-[30px]">
          <div id="header-content" className="pl-4">
            <Link href="/seller/profile">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
                alt="Avatar"
                className="mb-4 h-auto rounded-full align-middle"
                style={{ maxWidth: "80px", maxHeight: "80px" }}
              />
            </Link>
          </div>
          <hr className="border-gray-300" />
        </div>

        <h4 className="font-roboto text-white text-[24px] flex justify-center mb-2 font-medium leading-[1.2]">
         Ann
        </h4>
        <br />
        <br />

        <div id="scrollContainer">
          <ul className="relative list-none" data-te-sidenav-menu-ref>
            <li className="relative">
              <Link
                className="font-roboto font-[500px] text-[18px] text-white group flex h-12 cursor-pointer
                                 items-center truncate w-[239px]
                                py-4 px-6 outline-none transition duration-300 
                                ease-linear hover:bg-white hover:text-inherit hover:outline-none 
                                focus:bg-white focus:text-inherit focus:outline-none active:bg-white 
                                active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit 
                                data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none 
                                "
                href="/seller/dashboard"
              >
                <span className="mr-4 [&>svg]:h-3.5 [&>svg]:w-[18px] [&svg]:h-[18px]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    ></path>
                  </svg>
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="relative">
              <a
                className="font-roboto font-[500px] text-[18px] text-white group flex h-12 cursor-pointer
                                 items-center truncate w-[239px]
                                py-4 px-6 outline-none transition duration-300 
                                ease-linear hover:bg-white hover:text-inherit hover:outline-none 
                                focus:bg-white focus:text-inherit focus:outline-none active:bg-white 
                                active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit 
                                data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none 
                                "
                href="/seller/products"
              >
                <span className="mr-4 [&>svg]:h-3.5 [&>svg]:w-[18px] [&svg]:h-[18px]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    ></path>
                  </svg>
                </span>
                <span>Products</span>
              </a>
            </li>

            <li className="relative">
              <Link
                className="font-roboto font-[500px] text-[18px] text-white group flex h-12 cursor-pointer
                                 items-center truncate w-[239px]
                                py-4 px-6 outline-none transition duration-300 
                                ease-linear hover:bg-white hover:text-inherit hover:outline-none 
                                focus:bg-white focus:text-inherit focus:outline-none active:bg-white 
                                active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit 
                                data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none 
                                "
                href="/seller/notifications"
              >
                <span className="mr-4 [&>svg]:h-3.5 [&>svg]:w-[18px] [&svg]:h-[18px]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    ></path>
                  </svg>
                </span>
                <span>Notifications</span>
              </Link>
            </li>

            <li className="relative">
              <a
                className="font-roboto font-[500px] text-[18px] text-white group flex h-12 cursor-pointer
                                 items-center truncate w-[239px]
                                py-4 px-6 outline-none transition duration-300 
                                ease-linear hover:bg-white hover:text-inherit hover:outline-none 
                                focus:bg-white focus:text-inherit focus:outline-none active:bg-white 
                                active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit 
                                data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none 
                                "
                href="#!"
              >
                <span className="mr-4 [&>svg]:h-3.5 [&>svg]:w-[18px] [&svg]:h-[18px]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    ></path>
                  </svg>
                </span>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
    /* End of Sidebar for seller */
  );
}
