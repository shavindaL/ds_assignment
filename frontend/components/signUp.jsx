import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUp() {
  // Set of states for the input fields of seller acoount
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [shopName, setShopName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");

  // Set of error alerts for the input fields of seller account
  const [firstNameAlert, setFirstNameAlert] = useState("");
  const [lastNameAlert, setLastNameAlert] = useState("");
  const [shopNameAlert, setShopNameAlert] = useState("");
  const [phoneNumberAlert, setPhoneNumberAlert] = useState("");
  const [emailAlert, setEmailAlert] = useState("");
  const [passwordAlert, setPwdAlert] = useState("");

  // Error alert to denote failure of seller account creation
  const [accountAlert, setAccountAlert] = useState("");

  // Function to reset all input fields and alerts
  function resetAll() {
    setFirstName("");
    setLastName("");
    setShopName("");
    setPhoneNumber("");
    setEmail("");
    setPwd("");

    setFirstNameAlert("");
    setLastNameAlert("");
    setShopNameAlert("");
    setPhoneNumberAlert("");
    setEmailAlert("");
    setPwdAlert("");

    setAccountAlert("");
  }

  // Function to validate the details
  function validateDetails() {
    // Variable to check whether the form is ready to be submitted
    let isValid = false;

    // Validate the firstName state variable to be filled and contain letters only
    if (/^[a-zA-Z]+$/.test(firstName) == true && firstName.length != 0) {
      isValid = true;
      setFirstNameAlert(
        <p className="text-danger-700 text-[12px] invisible" role="alert">
          First Name is required!
        </p>
      );

      // Reset border color and outline color of first name input field to green-4
      document.getElementById("firstName").style.borderColor = "#95de64";
      document.getElementById("firstName").style.outlineColor = "#95de64";
    } else {
      if (firstName.length == 0) {
        setFirstNameAlert(
          <p className="text-danger-700 text-[12px]" role="alert">
            First Name is required!
          </p>
        );

        // Set border color and outline color of first name input field to red
        document.getElementById("firstName").style.borderColor = "red";
        document.getElementById("firstName").style.outlineColor = "red";
      } else if (/^[a-zA-Z]+$/.test(firstName) == false) {
        setFirstNameAlert(
          <p className="text-danger-700 text-[12px]" role="alert">
            Please enter only letters
          </p>
        );

        // Set border color and outline color of first name input field to red
        document.getElementById("firstName").style.borderColor = "red";
        document.getElementById("firstName").style.outlineColor = "red";
      }

      isValid = false;
    }

    // Validate the lastName state variable to be filled and contain letters only
    if (/^[a-zA-Z]+$/.test(lastName) == true && lastName.length != 0) {
      isValid = true;
      setLastNameAlert("");

      // Reset border color and outline color of last name input field to green-4
      document.getElementById("lastName").style.borderColor = "#95de64";
      document.getElementById("lastName").style.outlineColor = "#95de64";
    } else {
      if (lastName.length == 0) {
        setLastNameAlert(
          <p className="text-danger-700 text-[12px]" role="alert">
            Last Name is required!
          </p>
        );

        // Set border color and outline color of last name input field to red
        document.getElementById("lastName").style.borderColor = "red";
        document.getElementById("lastName").style.outlineColor = "red";
      } else if (/^[a-zA-Z]+$/.test(lastName) == false) {
        setLastNameAlert(
          <p className="text-danger-700 text-[12px]" role="alert">
            Please enter only letters
          </p>
        );

        // Set border color and outline color of last name input field to red
        document.getElementById("lastName").style.borderColor = "red";
        document.getElementById("lastName").style.outlineColor = "red";
      }

      isValid = false;
    }

    // Validate the shopName state variable to be filled
    if (shopName.length == 0) {
      isValid = false;

      setShopNameAlert(
        <p className="text-danger-700 text-[12px]" role="alert">
          Shop Name is required!
        </p>
      );

      // Set border color and outline color of shop name input field to red
      document.getElementById("shopName").style.borderColor = "red";
      document.getElementById("shopName").style.outlineColor = "red";
    } else {
      isValid = true;

      setShopNameAlert(
        <p className="text-danger-700 text-[12px] invisible" role="alert">
          Shop Name is required!
        </p>
      );

      // Reset border color and outlinr color of shop name input field to green-4
      document.getElementById("shopName").style.borderColor = "#95de64";
      document.getElementById("shopName").style.outlineColor = "#95de64";
    }

    // Validate the phoneNumber state variable to be filled and contain numbers only and of length 10 only
    if (/^\d+$/.test(phoneNumber) == true && phoneNumber.length == 10) {
      isValid = true;
      setPhoneNumberAlert("");

      // Reset the border color and outline color of mobile number input field to green-4
      document.getElementById("phoneNumber").style.borderColor = "#95de64";
      document.getElementById("phoneNumber").style.outlineColor = "#95de64";
    } else {
      if (phoneNumber.length == 0) {
        setPhoneNumberAlert(
          <p className="text-danger-700 text-[12px]" role="alert">
            Phone Number is required!
          </p>
        );

        // Set the border color and outlinr of mobile number input field to red
        document.getElementById("phoneNumber").style.borderColor = "red";
        document.getElementById("phoneNumber").style.outlineColor = "red";
      } else if (phoneNumber.length != 10) {
        setPhoneNumberAlert(
          <p className="text-danger-700 text-[12px]" role="alert">
            Please enter only 10 digits
          </p>
        );

        // Set the border color and outline of mobile number input field to red
        document.getElementById("phoneNumber").style.borderColor = "red";
        document.getElementById("phoneNumber").style.outlineColor = "red";
      } else if (/^\d+$/.test(phoneNumber) == false) {
        setPhoneNumberAlert(
          <p className="text-danger-700 text-[12px]" role="alert">
            Please enter only numbers
          </p>
        );

        // Set the border color and outline color of mobile number input field to red
        document.getElementById("phoneNumber").style.borderColor = "red";
        document.getElementById("phoneNumber").style.outlineColor = "red";
      }

      isValid = false;
    }

    // Validate the email state variable to be filled and check for appropriate pattern
    if (email.length == 0) {
      setEmailAlert(
        <p className="text-danger-700 text-[12px]" role="alert">
          Email is required!
        </p>
      );

      // Set the border color and outline color of email input field to red
      document.getElementById("email").style.borderColor = "red";
      document.getElementById("email").style.outlineColor = "red";

      isValid = false;
    } else {
      if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        setEmailAlert("");

        // Reset the border color and outlinr color of email input field to green-4
        document.getElementById("email").style.borderColor = "#95de64";
        document.getElementById("email").style.outlineColor = "#95de64";

        isValid = true;
      } else {
        setEmailAlert(
          <p className="text-danger-700 text-[12px]" role="alert">
            Please enter a valid email (Eg - 'abc@gmail.com')
          </p>
        );

        // Set the border color and outlinr color of email input field to red
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").style.outlineColor = "red";

        isValid = false;
      }
    }

    // Validate the password state variable to be filled and check for appropriate pattern
    // At least one uppercase letter, lowercase letter, one number and one special character
    // Minimum length of 8 characters
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/.test(
        password
      ) &&
      password.length >= 8
    ) {
      isValid = true;
      setPwdAlert("");

      // Reset the border color and outline color of password input field to green-4
      document.getElementById("password").style.borderColor = "#95de64";
      document.getElementById("password").style.outlineColor = "#95de64";
    } else {
      if (password.length == 0) {
        setPwdAlert(
          <p className="text-danger-700 text-[12px]" role="alert">
            Password is required!
          </p>
        );

        // Set the border color and outline color of password input field to red
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password").style.outlineColor = "red";
      } else if (password.length < 8) {
        setPwdAlert(
          <p className="text-danger-700 text-[12px]" role="alert">
            Password must be at least 8 characters long
          </p>
        );

        // Set the border color and outline color of password input field to red
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password").style.outlineColor = "red";
      } else if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/.test(
          password
        ) == false
      ) {
        setPwdAlert(
          <p className="text-danger-700 text-[12px]" role="alert">
            Password must contain at least one uppercase letter, one lowercase
            letter, one number and one special character
          </p>
        );

        // Set the border color and outline color of password input field to red
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password").style.outlineColor = "red";
      }

      isValid = false;
    }

    // Return the boolean value
    return isValid;
  }

  // Function to submit the seller form
  async function submitSellerForm(e) {
    // To prevent the page from auto refreshing
    e.preventDefault();

    // Submit the form if isValid = true
    if (validateDetails() == true) {
      // Create new object
      const newSeller = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        shopName: shopName,
        email: email,
        password: password,
      };

      try {
        // Define request options
        const reqOpts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSeller),
        };

        const res = await fetch(
          "http://127.0.0.1:5000/v1/seller/addSeller",
          reqOpts
        );

        const resMsg = await res.text();

        // Set email alert for following response message
        if (resMsg === "Sorry, this email is already taken") {
          setEmailAlert(
            <p className="text-danger-700 text-[12px]" role="alert">
              {resMsg}
            </p>
          );

          // Set the border color and outlinr color of email input field to red
          document.getElementById("email").style.borderColor = "red";
          document.getElementById("email").style.outlineColor = "red";
        } else if (resMsg === "Seller added successfully") {
          // Invoke resetAll function to clear all filled input field and alerts
          resetAll();

          // Show progress spinner
          document.getElementById("submitSucessSpinner").style.visibility =
            "visible";

          // Redirect to login page if account creation was successful
          window.location.replace("http://localhost:3000/");
        } else {
          // Alert the user if account creation was unsuccessful
          setAccountAlert(
            <div
              className="justify-center mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
              role="alert"
            >
              <span class="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Failed to create account!
            </div>
          );
        }
      } catch (err) {
        // Print any error message
        console.log(err.message);
      }
    }
  }

  return (
    <>
      {/* Display alert to user if account creation failed */}
      <center>{accountAlert}</center>

      <section className="h-screen">
        <div className="h-full px-6 text-neutral-800 dark:text-neutral-200">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div
              className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12"
              style={{ position: "absolute", top: "100px", right: "70px" }}
            >
              {/* start the pill nav */}
              <ul
                className="mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row"
                id="pills-tab"
                role="tablist"
                data-te-nav-ref
              >
                <li role="presentation">
                  <a
                    href="#pills-home"
                    className="my-2 block rounded px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-green-1 data-[te-nav-active]:text-green-9 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
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
                    className="my-2 block rounded px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-green-1 data-[te-nav-active]:text-green-9 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
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
              <div className="mb-6">
                <div
                  className="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  data-te-tab-active
                >
                  <form>
                    <div className="flex flex-row items-center justify-center lg:justify-start">
                      <p className="mb-0 mr-4 text-lg">Sign up with</p>
                      <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="inlne-block mx-1 h-9 w-9 rounded-full bg-facebook uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      >
                        {/* <!-- Facebook --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto h-3.5 w-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="inlne-block mx-1 h-9 w-9 rounded-full bg-twit uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      >
                        {/* <!-- Twitter --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto h-3.5 w-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="inlne-block mx-1 h-9 w-9 rounded-full bg-linkedin uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      >
                        {/* <!-- Linkedin --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto h-3.5 w-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </button>
                    </div>

                    <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                      <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                        Or
                      </p>
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="text"
                        style={{
                          border: "1px",
                          borderStyle: "solid",
                          height: "50px",
                          padding: "5px",
                        }}
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                      />
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="password"
                        style={{
                          border: "1px",
                          borderStyle: "solid",
                          height: "50px",
                          padding: "5px",
                        }}
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent"
                        id="exampleFormControlInput22"
                        placeholder="Password"
                      />
                      {/* <label
                          for="exampleFormControlInput22"
                          className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                        >
                          Password
                        </label> */}
                    </div>

                    <div className="mb-6 flex items-center justify-between">
                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                          type="checkbox"
                          value=""
                          id="exampleCheck2"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="exampleCheck2"
                        >
                          Remember me
                        </label>
                      </div>
                      <a href="#!">Terms and conditions</a>
                    </div>

                    <div className="text-center lg:text-left">
                      <button
                        type="button"
                        className="inline-block rounded bg-green-6 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-9 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Register
                      </button>
                      <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                        Have an account?
                        <a
                          href="#!"
                          className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                        >
                          &nbsp; Login
                        </a>
                      </p>
                    </div>
                  </form>
                </div>

                {/* Start of seller account */}
                <div
                  className="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <form onSubmit={submitSellerForm}>
                    <p
                      className="mb-0 mr-4 text-lg"
                      style={{ marginBottom: "20px" }}
                    >
                      Sign up
                    </p>

                    {/* Display alert in case of error */}
                    <div className="flex gap-x-[209.5px]">
                      {firstNameAlert}
                      {lastNameAlert}
                    </div>

                    {/* First name  */}
                    <div className="grid grid-cols-2 gap-x-4">
                      <input
                        type="text"
                        style={{
                          border: "1px",
                          borderStyle: "solid",
                          borderColor: "#95de64",
                          height: "50px",
                          padding: "5px",
                          marginBottom: "25px",
                        }}
                        className="peer block min-h-[auto] w-half rounded border-0 bg-transparent focus:outline-green-4"
                        id="firstName"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                      />

                      {/* Last name */}
                      <input
                        type="text"
                        style={{
                          border: "1px",
                          borderStyle: "solid",
                          borderColor: "#95de64",
                          height: "50px",
                          padding: "5px",
                        }}
                        className="peer block min-h-[auto] w-half rounded border-0 bg-transparent outline-green-4"
                        id="lastName"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>

                    <div className="flex gap-x-[205px]">
                      {shopNameAlert}
                      {phoneNumberAlert}
                    </div>

                    {/* <!-- Shop name --> */}
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        style={{
                          border: "1px",
                          borderStyle: "solid",
                          borderColor: "#95de64",
                          height: "50px",
                          padding: "5px",
                          marginBottom: "25px",
                        }}
                        className="peer block min-h-[auto] w-half rounded border-0 bg-transparent outline-green-4"
                        id="shopName"
                        placeholder="Shop Name"
                        onChange={(e) => setShopName(e.target.value)}
                      />

                      {/* <!-- Telephone number --> */}
                      <input
                        type="tel"
                        style={{
                          border: "1px",
                          borderStyle: "solid",
                          borderColor: "#95de64",
                          height: "50px",
                          padding: "5px",
                        }}
                        className="peer block min-h-[auto] w-half rounded border-0 bg-transparent outline-green-4"
                        id="phoneNumber"
                        placeholder="Mobile Number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    {/* Display emailAlert if necessary */}
                    {emailAlert}

                    {/* <!-- Email input --> */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="text"
                        style={{
                          border: "1px",
                          borderStyle: "solid",
                          borderColor: "#95de64",
                          height: "50px",
                          padding: "5px",
                        }}
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-green-4"
                        id="email"
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    {/* Display passwordAlert if necessary */}
                    {passwordAlert}

                    {/* <!-- Password input --> */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="password"
                        style={{
                          border: "1px",
                          borderStyle: "solid",
                          borderColor: "#95de64",
                          height: "50px",
                          padding: "5px",
                        }}
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-green-4"
                        id="password"
                        placeholder="Password"
                        onChange={(e) => setPwd(e.target.value)}
                      />
                    </div>

                    <div className="mb-6 flex items-center justify-between">
                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] 
                          h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] 
                          border-solid border-neutral-300 outline-none before:pointer-events-none 
                          before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full 
                          before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] 
                          before:content-[''] checked:border-green-6 checked:bg-green-6 checked:before:opacity-[0.16] 
                          checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block 
                          checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 
                          checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 
                          checked:after:border-solid checked:after:border-white checked:after:bg-transparent 
                          checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] 
                          hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] 
                          focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                          focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block 
                          focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] 
                          checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] 
                          checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] 
                          checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] 
                          checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] 
                          checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid 
                          checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 
                          dark:checked:border-primary dark:checked:bg-primary"
                          type="checkbox"
                          value=""
                          id="exampleCheck2"
                          required
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="exampleCheck2"
                        >
                          Remember me
                        </label>
                      </div>
                      <a href="#!">Terms and conditions</a>
                    </div>

                    <div className="text-center lg:text-left">
                      <button
                        type="submit"
                        className="inline-block rounded bg-green-6 px-7 pt-3 pb-2.5 text-sm
                        font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]
                        transition duration-150 ease-in-out hover:bg-green-9
                        hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                        focus:bg-green-6 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                        focus:outline-none focus:ring-0 active:bg-green-6 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Register
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div
                        className="invisible relative top-[10px] inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid 
                        border-green-8 border-r-transparent align-[-0.125em] 
                        motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                        id="submitSucessSpinner"
                      >
                        <span
                          className="!absolute !-m-px !h-px !w-px !overflow-hidden 
                        !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >
                          Loading...
                        </span>
                      </div>
                      {/* End of seller account */}
                      <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                        Have an account?
                        <a
                          href="#!"
                          className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                        >
                          &nbsp; Login
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
