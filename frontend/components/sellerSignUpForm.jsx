import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function SellerSignUpForm() {
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
    <div
      className="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
    >
      <form onSubmit={submitSellerForm}>
        <p className="mb-0 mr-4 text-lg" style={{ marginBottom: "20px" }}>
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
            <Link
              href="/login"
              className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
            >
              &nbsp; Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
