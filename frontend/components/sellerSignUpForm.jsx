import React from "react";

export default function SellerSignUpForm() {
  return (
    <div
      class="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
    >
      <form>
        <p class="mb-0 mr-4 text-lg" style={{ marginBottom: "20px" }}>
          Sign up
        </p>
        {/* <!-- first name --> */}
        <div class="grid grid-cols-2 gap-4">
          <input
            type="password"
            style={{
              border: "1px",
              borderStyle: "solid",
              height: "50px",
              padding: "5px",
              marginBottom: "25px",
            }}
            class="peer block min-h-[auto] w-half rounded border-0 bg-transparent"
            id="exampleFormControlInput22"
            placeholder="First Name"
          />

          {/* <!-- Last name --> */}

          <input
            type="password"
            style={{
              border: "1px",
              borderStyle: "solid",
              height: "50px",
              padding: "5px",
            }}
            class="peer block min-h-[auto] w-half rounded border-0 bg-transparent"
            id="exampleFormControlInput22"
            placeholder="Last Name"
          />
        </div>

        {/* <!-- Shop name --> */}
        <div class="grid grid-cols-2 gap-4">
          <input
            type="text"
            style={{
              border: "1px",
              borderStyle: "solid",
              height: "50px",
              padding: "5px",
              marginBottom: "25px",
            }}
            class="peer block min-h-[auto] w-half rounded border-0 bg-transparent"
            id="exampleFormControlInput22"
            placeholder="Shop Name"
          />

          {/* <!-- Telephone name --> */}

          <input
            type="password"
            style={{
              border: "1px",
              borderStyle: "solid",
              height: "50px",
              padding: "5px",
            }}
            class="peer block min-h-[auto] w-half rounded border-0 bg-transparent"
            id="exampleFormControlInput22"
            placeholder="Mobile Number"
          />
        </div>

        {/* <!-- Email input --> */}
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            style={{
              border: "1px",
              borderStyle: "solid",
              height: "50px",
              padding: "5px",
            }}
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent"
            id="exampleFormControlInput2"
            placeholder="Email address"
          />
        </div>

        {/* <!-- Password input --> */}
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input
            type="password"
            style={{
              border: "1px",
              borderStyle: "solid",
              height: "50px",
              padding: "5px",
            }}
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent"
            id="exampleFormControlInput22"
            placeholder="Password"
          />
        </div>

        <div class="mb-6 flex items-center justify-between">
          <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
              type="checkbox"
              value=""
              id="exampleCheck2"
            />
            <label
              class="inline-block pl-[0.15rem] hover:cursor-pointer"
              for="exampleCheck2"
            >
              Remember me
            </label>
          </div>
          <a href="#!">Terms and conditions</a>
        </div>

        <div class="text-center lg:text-left">
          <button
            type="button"
            class="inline-block rounded bg-green-6 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-9 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Register
          </button>
          <p class="mt-2 mb-0 pt-1 text-sm font-semibold">
            Have an account?
            <a
              href="#!"
              class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
            >
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
