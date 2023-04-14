import dynamic from "next/dynamic";

// Sidebar component is dynamically imported to prevent hydration error
const Sidebar = dynamic(() => import("@/components/seller/Sidebar"),
    { ssr: false });

export default function Profile() {
    return (
        /* Start of Profile page for the seller */
        <>
            <Sidebar />


            <div className="flex gap-x-[750px]">

                <p className="font-roboto font-[500] text-[38px] mt-[44px] ml-[336px]">
                    Profile
                </p>


                <div className="flex p-[20px] mt-[22px]">
                    <button
                        type="button"
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

                    {/* <div className="w-[40px]" /> */}

                    <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mb-2 ml-[40px] flex rounded-[5px] px-6 py-4
                                        leading-normal font-roboto font-[700] text-[14px] text-white shadow-md transition duration-150
                                        ease-in-out hover:shadow-lg
                                        focus:ring-0 bg-[#FF0000]"
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

            <center>

                {/* To select a file to be uploaded */}
                <input id="imgFile" type="file" style={{ display: "none" }} />

                <button onClick={() => {
                    document.getElementById("imgFile").click();
                }}>
                    <img id="profileImg" className="rounded-full ml-[250px] mt-[20px]
                 hover:transition hover:duration-500 hover:opacity-70 hover:cursor-pointer"
                        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
                        height={250}
                        width={250}></img>

                </button>

                <div className="ml-[250px] mt-[30px] font-roboto font-[500] text-[24px]">
                    Seller ID : 3
                </div>

                <div
                    className="ml-[264px] w-[850px] h-full mt-[32px] border border-green-4 rounded-[5px] bg-white pl-[30px]
                    pr-[30px] pb-[20px] pt-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">


                    <div className="flex justify-center gap-x-[160px] mt-[10px]">
                        <div className="justify-center">
                            <label className="font-roboto font-500 text-[20px]">First Name</label>

                            <div className="flex mt-[10px] ">
                                <input id="firstName" className="w-full outline-none text-center hover:border-b hover:border-green-7
                                 hover:transition hover:duration-900 active:border-green-7"
                                    value={"John"} readOnly /> &nbsp;&nbsp;

                                <button
                                    type="button"
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
                                <input id="lastName" className="w-full outline-none text-center hover:border-b hover:border-green-7
                                 hover:transition hover:duration-900 active:border-green-7"
                                    value={"Smith"} readOnly /> &nbsp;&nbsp;

                                <button
                                    type="button"
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
                                <input id="phoneNum" className="w-full outline-none text-center hover:border-b hover:border-green-7
                                 hover:transition hover:duration-900 active:border-green-7"
                                    value={"0789056432"} readOnly /> &nbsp;&nbsp;

                                <button
                                    type="button"
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
                                <input id="email" className="w-full outline-none text-center hover:border-b hover:border-green-7
                                 hover:transition hover:duration-900 active:border-green-7"
                                    value={"john123@gmail.com"} readOnly /> &nbsp;&nbsp;

                                <button
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
                                <input id="password" className="w-full outline-none text-center hover:border-b hover:border-green-7
                                 hover:transition hover:duration-900 active:border-green-7"
                                    value={"john123"} readOnly /> &nbsp;&nbsp;

                                <button
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
                                <input id="shopName" className="w-full outline-none text-center hover:border-b hover:border-green-7
                                 hover:transition hover:duration-900 active:border-green-7"
                                    value={"Express Sales"} readOnly /> &nbsp;&nbsp;

                                <button
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

            </center>

            <div className="h-[30px]" />


        </>
        /* End of Profile page for the seller */
    );
};