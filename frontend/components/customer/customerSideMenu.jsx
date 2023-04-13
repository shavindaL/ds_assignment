export default function CustomerSideMenu() {
  return (
    <>
      {/* <!--Tabs navigation--> */}
      <ul
        class="mr-4 flex list-none flex-col flex-wrap pl-0"
        role="tablist"
        data-te-nav-ref
        style={{
          position: "absolute",
          left: "100px",
          top: "100px",
          width: "15%",
          backgroundColor: "white",
          boxShadow: "1px 2px 9px #0000000f",
          margin: "4em",
          padding: "1em",
        }}
      >
        <li role="presentation" class="flex-grow text-center">
          <a
            href="#tabs-home03"
            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-home03"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-home03"
            aria-selected="true"
          >
            Orders
          </a>
        </li>
        <li role="presentation" class="flex-grow text-center">
          <a
            href="#tabs-profile03"
            class="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-profile03"
            role="tab"
            aria-controls="tabs-profile03"
            aria-selected="false"
          >
            Payment History
          </a>
        </li>
        <li role="presentation" class="flex-grow text-center">
          <a
            href="#tabs-messages03"
            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-messages03"
            role="tab"
            aria-controls="tabs-messages03"
            aria-selected="false"
          >
            Adresses
          </a>
        </li>
        <li role="presentation" class="flex-grow text-center">
          <a
            href="#tabs-contact03"
            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-contact03"
            role="tab"
            aria-controls="tabs-contact03"
            aria-selected="false"
          >
            Settings
          </a>
        </li>
      </ul>

      {/* <!--Tabs content--> */}
      <div
        class="my-2"
        style={{ position: "absolute", left: "500px", top: "200px" }}
      >
        <div
          class="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-home03"
          role="tabpanel"
          aria-labelledby="tabs-home-tab03"
          data-te-tab-active
        >
          Tab 1 content
        </div>
        <div
          class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-profile03"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab03"
        >
          Tab 2 content
        </div>
        <div
          class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-messages03"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab03"
        >
          Tab 3 content
        </div>
        <div
          class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-contact03"
          role="tabpanel"
          aria-labelledby="tabs-contact-tab03"
        >
          Tab 4 content
        </div>
      </div>
    </>
  );
}
