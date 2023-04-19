import CustomerSignUpForm from "./customerSignUpForm";
import SellerSignUpForm from "./sellerSignUpForm";

export default function SignUp() {
  return (
    <>
      <section class="h-screen">
        <div class="h-full px-6 text-neutral-800 dark:text-neutral-200">
          <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="w-full"
                alt="Sample image"
              />
            </div>
            <div
              class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12"
              style={{ position: "absolute", top: "100px", right: "70px" }}
            >
              {/* start the pill nav */}
              <ul
                class="mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row"
                id="pills-tab"
                role="tablist"
                data-te-nav-ref
              >
                <li role="presentation">
                  <a
                    href="#pills-home"
                    class="my-2 block rounded px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-green-1 data-[te-nav-active]:text-green-9 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
                    id="pills-home-tab"
                    data-te-toggle="pill"
                    data-te-target="#pills-home"
                    data-te-nav-active
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Customer Account
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#pills-profile"
                    class="my-2 block rounded px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-green-1 data-[te-nav-active]:text-green-9 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
                    id="pills-profile-tab"
                    data-te-toggle="pill"
                    data-te-target="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Seller Account
                  </a>
                </li>
              </ul>
              <div class="mb-6">

                {/* <<<<<<<<<<-------------------- customer sign up form -------------->>>>>>>>>>>>>>>>> */}
                
                <CustomerSignUpForm></CustomerSignUpForm>

                {/* <<<<<<<<<<-------------------- Seller sign up form -------------->>>>>>>>>>>>>>>>> */}

                <SellerSignUpForm></SellerSignUpForm>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
