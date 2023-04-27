import axios from "axios";
import dynamic from "next/dynamic";

import { useState } from "react";
import { SellerLogout } from "@/hooks/sellerLogout";


// Sidebar component is dynamically imported to prevent hydration error
const Sidebar = dynamic(() => import("@/components/seller/Sidebar"),
    { ssr: false });

// To get the static paths
export async function getStaticPaths() {
    // Define sellerPaths array to hold all sellerIDs
    let sellerPaths = [];

    // Fetch all existing data from sellers collection in sellerDB
    try {
        const res = await fetch("http://10.5.0.3:5000/v1/seller/sellers");

        // Get all sellers
        const sellers = await res.json();

        // Loop through the sellers data and append each sellerID to sellerPaths array
        for (let seller of sellers) {
            sellerPaths.push({ params: { id: seller.sellerID.toString() } });
        }

    } catch (err) {
        // Print error message
        console.log(err.message);
    }

    return {
        paths: sellerPaths,
        fallback: false, // can also be true or 'blocking'
    }
}


export async function getStaticProps(context) {

    // Variable to hold data of the particular seller
    let sellerData;

    // Fetch details of particular seller
    try {

        const res = await fetch(`http://10.5.0.3:5000/v1/seller/${context.params.id}`);

        // Assign data
        sellerData = await res.json();

    } catch (err) {
        // Print error message
        console.log(err.message);
    }


    return {
        // Passed to the page component as props
        props: { seller: sellerData },
    }
}





export default function Profile({ seller }) {
    const { sLogout } = SellerLogout();

    // Set of states for the input fields of seller profile
    const [firstName, setFirstName] = useState(seller.firstName);
    const [lastName, setLastName] = useState(seller.lastName);
    const [shopName, setShopName] = useState(seller.shopName);
    const [phoneNumber, setPhoneNumber] = useState(seller.phoneNumber);
    const [email, setEmail] = useState(seller.email);
    const [password, setPwd] = useState(seller.password);

    // State variable to hold image data during uploading of photo
    const [imageData, setImageData] = useState(null);

    // State variables for error alerts
    const [firstNameAlert, setFirstNameAlert] = useState("");
    const [lastNameAlert, setLastNameAlert] = useState("");
    const [shopNameAlert, setShopNameAlert] = useState("");
    const [phoneNumberAlert, setPhoneNumberAlert] = useState("");
    const [emailAlert, setEmailAlert] = useState("");
    const [passwordAlert, setPwdAlert] = useState("");


    // Error alert to denote failure of seller account updation
    const [accountUpdateAlert, setAccountUpdateAlert] = useState("");

    const [accountDeleteAlert, setAccountDeleteAlert] = useState("");

    // Function to validate the updated details if any
    function validateDetails() {

        // An object to check whether all input fields are valid
        let isAllValid = {
            isFirstNameValid: false,
            isLastNameValid: false,
            isPhoneValid: false,
            isEmailValid: false,
            isPwdValid: false,
            isShopNameValid: false
        };

        // Validate the firstName state variable to be filled and contain letters only
        if (/^[a-zA-Z]+$/.test(firstName) == true && firstName.length != 0) {

            isAllValid.isFirstNameValid = true;

            setFirstNameAlert("");

        } else {
            if (firstName.length == 0) {
                setFirstNameAlert(
                    <p className="text-danger-700 text-[14px]" role="alert">
                        First Name is required!
                    </p>
                );


            } else if (/^[a-zA-Z]+$/.test(firstName) == false) {
                setFirstNameAlert(
                    <p className="text-danger-700 text-[14px]" role="alert">
                        Please enter only letters for first name
                    </p>
                );

            }

            isAllValid.isFirstNameValid = false;
        }

        // Validate the lastName state variable to be filled and contain letters only
        if (/^[a-zA-Z]+$/.test(lastName) == true && lastName.length != 0) {
            isAllValid.isLastNameValid = true;
            setLastNameAlert("");

        } else {
            if (lastName.length == 0) {
                setLastNameAlert(
                    <p className="text-danger-700 text-[14px]" role="alert">
                        Last Name is required!
                    </p>
                );

            } else if (/^[a-zA-Z]+$/.test(lastName) == false) {
                setLastNameAlert(
                    <p className="text-danger-700 text-[14px]" role="alert">
                        Please enter only letters for last name
                    </p>
                );

            }

            isAllValid.isLastNameValid = false;
        }

        // Validate the shopName state variable to be filled
        if (shopName.length == 0) {
            isAllValid.isShopNameValid = false;

            setShopNameAlert(
                <p className="text-danger-700 text-[14px]" role="alert">
                    Shop Name is required!
                </p>
            );


        } else {
            isAllValid.isShopNameValid = true;

            setShopNameAlert("");
        }

        // Validate the phoneNumber state variable to be filled and contain numbers only and of length 10 only
        if (/^\d+$/.test(phoneNumber) == true && phoneNumber.length == 10) {
            isAllValid.isPhoneValid = true;
            setPhoneNumberAlert("");

        } else {
            if (phoneNumber.length == 0) {
                setPhoneNumberAlert(
                    <p className="text-danger-700 text-[14px]" role="alert">
                        Phone Number is required!
                    </p>
                );

            } else if (phoneNumber.length != 10) {
                setPhoneNumberAlert(
                    <p className="text-danger-700 text-[14px]" role="alert">
                        Please enter only 10 digits for phone number
                    </p>
                );


            } else if (/^\d+$/.test(phoneNumber) == false) {
                setPhoneNumberAlert(
                    <p className="text-danger-700 text-[14px]" role="alert">
                        Please enter only numbers for phone number
                    </p>
                );


            }

            isAllValid.isPhoneValid = false;
        }

        // Validate the email state variable to be filled and check for appropriate pattern
        if (email.length == 0) {
            setEmailAlert(
                <p className="text-danger-700 text-[14px]" role="alert">
                    Email is required!
                </p>
            );

            isAllValid.isEmailValid = false;
        } else {
            if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                setEmailAlert("");

                isAllValid.isEmailValid = true;
            } else {
                setEmailAlert(
                    <p className="text-danger-700 text-[14px]" role="alert">
                        Please enter a valid email (Eg - 'abc@gmail.com')
                    </p>
                );

                isAllValid.isEmailValid = false;
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
            isAllValid.isPwdValid = true;
            setPwdAlert("");

        } else {
            if (password.length == 0) {
                setPwdAlert(
                    <p className="text-danger-700 text-[14px]" role="alert">
                        Password is required!
                    </p>
                );

            } else if (password.length < 8) {
                setPwdAlert(
                    <p className="text-danger-700 text-[14px]" role="alert">
                        Password must be at least 8 characters long
                    </p>
                );


            } else if (
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/.test(
                    password
                ) == false
            ) {
                setPwdAlert(
                    <p className="text-danger-700 text-[14px]" role="alert">
                        Password must contain at least one uppercase letter, one lowercase
                        letter, one number and one special character
                    </p>
                );

            }

            isAllValid.isPwdValid = false;
        }

        // Return the boolean value
        if (isAllValid.isFirstNameValid === false || isAllValid.isLastNameValid === false || isAllValid.isPhoneValid === false ||
            isAllValid.isEmailValid === false || isAllValid.isPwdValid === false || isAllValid.isShopNameValid === false) {
            return false;
        } else {
            return true;
        }
    }



    // Function to submit the updated details if any
    async function submitUpdatedData() {


        if (validateDetails() === true) {

            // Create new object
            const updatedSeller = {
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
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedSeller),
                };

                const res = await fetch(
                    `http://localhost:5000/v1/seller/${seller.sellerID}`,
                    reqOpts
                );

                const resMsg = await res.text();

                // Display error alert
                if (resMsg === "Sorry, this email is already taken") {
                    setEmailAlert(
                        <p className="text-danger-700 text-[14px]" role="alert">
                            {resMsg}
                        </p>
                    );

                } else if (resMsg === "Seller updated successfully") {

                    // Return message
                    return (resMsg);

                } else {
                    // Set accountUpdateAlert state variable as following
                    setAccountUpdateAlert(
                        <div
                            className="justify-center mb-3 inline-flex w-[300px] items-center rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
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
                            Failed to update account!
                        </div>
                    );
                }

            } catch (err) {
                // Print the error message
                console.log(err.message);
            }
        }
    }




    // Function to supdate profile photo
    async function submitUpdatedPhoto() {

        if (imageData) {
            // Print the file object
            console.log(imageData);

            const formData = new FormData();

            formData.append("sellerImage", imageData, imageData.name);

            try {

                const res = await axios.post(`http://localhost:5000/v1/seller/updatePhoto/${seller.sellerID}`,
                    formData,
                    {
                        headers:
                        {
                            'Content-Type': 'multipart/form-data'
                        }
                    })

                const resMsg = await res.data.toString();

                if (resMsg === "Failed to upload the image for seller") {
                    console.log(resMsg);

                    // Set the error alert if failed to upadte the profile photo
                    setAccountUpdateAlert(
                        <div
                            className="justify-center mb-3 inline-flex w-[300px] items-center rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
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
                            Failed to update profile photo!
                        </div>
                    );

                } else if (resMsg === "Failed to upload the image to cloud") {
                    console.log("Could not upload image to Google Cloud");
                } else {
                    console.log(resMsg);

                    // Return message
                    return resMsg;
                }

            } catch (err) {
                // Print error message
                console.log(err.message);
            }


        } else {
            // Print message that no file has been selected
            console.log("No file selected");

            // Return message
            return ("No image uploaded");
        }
    }



    // Function to handle the form submission of details and form submission of image
    async function updateHandler() {
        // Make the spinners visible
        document.getElementById("updateProgress").style.visibility = "visible"

        // Submit the form with details
        const isSuccess1 = document.getElementById("dataForm").onsubmit = await submitUpdatedData();

        // Submit the form with image
        const isSuccess2 = document.getElementById("imgForm").onsubmit = await submitUpdatedPhoto();

        if (isSuccess1 && isSuccess2) {
            window.location.reload();
        }

    }




    // Function to delete the seller
    async function handleDelete() {

        try {
            // Define request options
            const reqOpts = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const res = await fetch(`http://127.0.0.1:5000/v1/seller/${seller.sellerID}`, reqOpts);

            const resMsg = await res.text();

            if (resMsg === "Seller deleted successfully") {

                // Remove the seller token
                sLogout();
                
                // Redirect to homepage (root) if successfully deleted
                window.location.replace("http://localhost:3000/");

            } else {
                // Set accountDeleteAlert state variable as following
                setAccountDeleteAlert(
                    <div
                        className="justify-center mb-3 inline-flex w-[300px] items-center rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
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
                        Failed to delete account!
                    </div>
                );
            }

        } catch (err) {
            // Print message
            console.log(err.message);
        }



    }


    return (
        /* Start of Profile page for the seller */
        <>
            <Sidebar profilePhoto={seller.photo} sellerName={seller.firstName} sellerID={seller.sellerID.toString()} />


            <div className="flex gap-x-[750px]">

                <p className="font-roboto font-[500] text-[38px] mt-[44px] ml-[336px]">
                    Profile
                </p>


                <div className="flex p-[20px] mt-[22px]">
                    {/* SAVE button */}
                    <button
                        type="button"
                        onClick={updateHandler}
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mb-2 flex rounded-[5px] px-6 py-4
                                        leading-normal font-roboto font-[700] text-[14px] text-white shadow-md transition duration-150
                                        ease-in-out hover:shadow-lg focus:outline-none
                                        focus:ring-0 bg-green-5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-[20px] h-[20px]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        &nbsp;&nbsp;SAVE
                    </button>

                    {/* DELETE button */}
                    <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mb-2 ml-[40px] flex rounded-[5px] px-6 py-4
                                        leading-normal font-roboto font-[700] text-[14px] text-white shadow-md transition duration-150
                                        ease-in-out hover:shadow-lg
                                        focus:ring-0 bg-[#FF0000]"

                        data-te-target="#exampleModalCenter"
                        data-te-toggle="modal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-[20px] h-[20px]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        &nbsp;&nbsp;DELETE
                    </button>

                </div>

            </div>

            {/* Display account updation failure alert if necessary */}
            <center className="ml-[250px]">
                {accountUpdateAlert}
                {accountDeleteAlert}

                {/* To show the updation progress if necessary */}
                <div id="updateProgress" className="invisible relative right-[5px]">
                    <div
                        class="inline-block h-[15px] w-[15px] animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-[#118C42] align-[-0.125em] text-success opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                        role="status">
                        <span
                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span
                        >
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div
                        class="inline-block h-[15px] w-[15px] animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-[#118C42] align-[-0.125em] text-danger opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                        role="status">
                        <span
                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span
                        >
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div
                        class="inline-block h-[15px] w-[15px] animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-[#118C42] align-[-0.125em] text-warning opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                        role="status">
                        <span
                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span
                        >
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div
                        class="inline-block h-[15px] w-[15px] animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-[#118C42] align-[-0.125em] text-info opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                        role="status">
                        <span
                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span
                        >
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div
                        class="inline-block h-[15px] w-[15px] animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-[#118C42] align-[-0.125em] text-neutral-100 opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                        role="status">
                        <span
                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span
                        >
                    </div>

                </div>


            </center>



            <center>

                {/* To select a file to be uploaded */}
                <form id="imgForm" encType="multipart/form-data">
                    <input id="imgFile" type="file" accept="image/*" style={{ display: "none" }}
                        onChange={(e) => setImageData(e.target.files[0])}
                        name="imgFile" />
                </form>

                <button onClick={() => {
                    document.getElementById("imgFile").click();
                }}>

                    <img id="profileImg" className="rounded-full ml-[250px] mt-[20px] h-[250px] w-[250px]
                 hover:transition hover:duration-500 hover:opacity-70 hover:cursor-pointer"
                        src={seller.photo}
                    ></img>


                </button>



                <div className="ml-[250px] mt-[30px] font-roboto font-[500] text-[24px]">
                    Seller ID : {seller.sellerID}
                </div>


                <br />

                {/* Show error alert if any */}
                <center className="justify-center ml-[250px] relative top-[25px]">
                    {firstNameAlert}
                    {lastNameAlert}
                    {phoneNumberAlert}
                    {emailAlert}
                    {passwordAlert}
                    {shopNameAlert}
                </center>


                <div
                    className="ml-[264px] w-[850px] h-full mt-[32px] border border-green-4 rounded-[5px] bg-white pl-[30px]
                    pr-[30px] pb-[20px] pt-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">

                    <form id="dataForm">
                        <div className="flex justify-center gap-x-[160px] mt-[10px]">
                            <div className="justify-center">
                                <label className="font-roboto font-500 text-[20px]">First Name</label>

                                <div className="flex mt-[10px] ">
                                    {/* Input field for first name */}
                                    <input id="firstName" className="w-full outline-none text-center hover:border-b hover:border-green-7
                                 hover:transition hover:duration-500 active:border-green-7"
                                        type="text"
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)} readOnly /> &nbsp;&nbsp;

                                    <button
                                        type="button"
                                        className="p-[3px] rounded-[3px] hover:transition hover:duration-500 hover:bg-[#E4E6E9]"
                                        onClick={() => {
                                            document.getElementById("firstName").readOnly = false;
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652
                                       2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5
                                        4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25
                                         2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25
                                          0 015.25 6H10" />
                                        </svg>
                                    </button>
                                </div>

                            </div>

                            <div className="justify-center">
                                <label className="font-roboto font-500 text-[20px]">Last Name</label>

                                <div className="flex mt-[10px]">
                                    {/* Input field for last name */}
                                    <input id="lastName" className="w-full outline-none text-center hover:border-b hover:border-green-7
                                 hover:transition hover:duration-500 active:border-green-7"
                                        type="text"
                                        value={lastName} readOnly
                                        onChange={e => setLastName(e.target.value)} /> &nbsp;&nbsp;

                                    <button
                                        type="button"
                                        className="p-[3px] rounded-[3px] hover:transition hover:duration-500 hover:bg-[#E4E6E9]"
                                        onClick={() => {
                                            document.getElementById("lastName").readOnly = false;
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652
                                       2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5
                                        4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25
                                         2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25
                                          0 015.25 6H10" />
                                        </svg>
                                    </button>
                                </div>

                            </div>

                            <div className="justify-center">
                                <label className="font-roboto font-500 text-[20px]">Phone</label>

                                <div className="flex mt-[10px]">
                                    {/* Input field for phone number */}
                                    <input id="phoneNum" className="w-full outline-none text-center hover:border-b hover:border-green-7
                                 hover:transition hover:duration-500 active:border-green-7"
                                        type="tel"
                                        value={phoneNumber} readOnly
                                        onChange={e => setPhoneNumber(e.target.value)} /> &nbsp;&nbsp;

                                    <button
                                        type="button"
                                        className="p-[3px] rounded-[3px] hover:transition hover:duration-500 hover:bg-[#E4E6E9]"
                                        onClick={() => {
                                            document.getElementById("phoneNum").readOnly = false;
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652
                                       2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5
                                        4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25
                                         2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25
                                          0 015.25 6H10" />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>




                        <hr className="border-[#D4D4D4] mt-[8px]" />



                        <div className="flex justify-center gap-x-[160px] mt-[10px]">

                            <div className="justify-center">
                                <label className="font-roboto font-500 text-[20px]">Email</label>

                                <div className="flex mt-[10px]">
                                    {/* Input field for email */}
                                    <input id="email" className="w-full outline-none text-center hover:border-b hover:border-green-7
                                 hover:transition hover:duration-500 active:border-green-7"
                                        type="text"
                                        value={email} readOnly
                                        onChange={e => setEmail(e.target.value)} /> &nbsp;&nbsp;

                                    <button
                                        className="p-[3px] rounded-[3px] hover:transition hover:duration-500 hover:bg-[#E4E6E9]"
                                        type="button"
                                        onClick={() => {
                                            document.getElementById("email").readOnly = false;
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652
                                       2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5
                                        4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25
                                         2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25
                                          0 015.25 6H10" />
                                        </svg>
                                    </button>
                                </div>

                            </div>

                            <div className="justify-center">
                                <label className="font-roboto font-500 text-[20px]">Password</label>

                                <div className="flex mt-[10px]">
                                    {/* Input field for password */}
                                    <input id="password" className="w-full outline-none text-center hover:border-b hover:border-green-7
                                 hover:transition hover:duration-500 active:border-green-7"
                                        tyep="password"
                                        value={password} readOnly
                                        onChange={e => setPwd(e.target.value)} /> &nbsp;&nbsp;

                                    <button
                                        className="p-[3px] rounded-[3px] hover:transition hover:duration-500 hover:bg-[#E4E6E9]"
                                        type="button"
                                        onClick={() => {
                                            document.getElementById("password").readOnly = false;
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652
                                       2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5
                                        4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25
                                         2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25
                                          0 015.25 6H10" />
                                        </svg>
                                    </button>
                                </div>

                            </div>

                            <div className="justify-center">
                                <label className="font-roboto font-500 text-[20px]">Shop</label>

                                <div className="flex mt-[10px]">
                                    {/* Input field for shop name */}
                                    <input id="shopName" className="w-full outline-none text-center hover:border-b hover:border-green-7
                                 hover:transition hover:duration-500 active:border-green-7"
                                        type="text"
                                        value={shopName} readOnly
                                        onChange={e => setShopName(e.target.value)} /> &nbsp;&nbsp;

                                    <button
                                        className="p-[3px] rounded-[3px] hover:transition hover:duration-500 hover:bg-[#E4E6E9]"
                                        type="button"
                                        onClick={() => {
                                            document.getElementById("shopName").readOnly = false;
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652
                                       2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5
                                        4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25
                                         2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25
                                          0 015.25 6H10" />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>

                        <hr className="border-[#D4D4D4] mt-[8px]" />

                    </form>


                    <div className="flex justify-center mt-[30px] gap-x-[30px]">

                        <button

                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="mx-1 h-9 w-9 rounded-full bg-facebook uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-3.5 w-3.5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="mx-1 h-9 w-9 rounded-full bg-twit uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-3.5 w-3.5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="mx-1 h-9 w-9 rounded-full bg-linkedin uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-3.5 w-3.5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </button>

                    </div>

                </div>

            </center >

            <div className="h-[30px]" />




            {/********************************************************************************************************************** */}

            {/* Start of Verically centered modal */}
            <div
                data-te-modal-init
                className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModalCenter"
                tabindex="-1"
                aria-labelledby="exampleModalCenterTitle"
                aria-modal="true"
                role="dialog">
                <div
                    data-te-modal-dialog-ref
                    className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                    <div
                        className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                        <div
                            className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">

                            {/* Modal title */}
                            <h5
                                className="font-roboto font-[500] text-[24px]"
                                id="exampleModalScrollableLabel">
                                Are you sure?
                            </h5>

                            {/* Close button */}
                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-6 w-6">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="relative p-4">
                            <p>This is will permanantly delete your account. Are your sure?</p>
                        </div>

                        {/* Modal footer */}
                        <div
                            className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <button
                                type="button"
                                className="inline-block rounded bg-[#F9FAFB] px-6 pb-2 pt-2.5 
                                text-xs font-roboto uppercase leading-normal text-[#14A44D] transition 
                                duration-150 ease-in-out hover:bg-[#D6FAE4] focus:bg-[#D6FAE4]
                                focus:outline-none focus:ring-0 active:bg-[#D6FAE4]"
                                data-te-modal-dismiss
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                NO
                            </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button
                                type="button"
                                onClick={handleDelete}
                                className="inline-block rounded bg-[#DC4C64]
                                px-6 pb-2 pt-2.5 text-xs font-roboto uppercase
                                leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64]
                                transition duration-150 ease-in-out hover:bg-danger-600
                                hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]
                                focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
                                YES
                            </button>
                        </div>
                    </div>
                </div>
            </div >


            {/* End of vertically centered modal */}

        </>
        /* End of Profile page for the seller */
    );
};