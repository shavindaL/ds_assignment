import Link from "next/link";

export default function ProductCard({ productData }) {
    const productId = productData["product"].productId;
    const productName = productData["product"].productName;
    const price = productData["product"].unitPrice;
    const imgLink = productData["imageUrls"][0];


    const handleDelete = async (id) => {
        alert(id)
        // const res = await fetch(`http://127.0.0.1:5000/v1/inventory/products/${productId}`, {
        //     method: `DELETE`
        // })
        // const json = await res.json()

        // if (res.ok) {
        //     console.log(json);
        // }
    }

    return (
        /* Start of Product Card for seller */
        <>
            <div
                className="box-border flex flex-col items-center p-[20px] gap-[80px] w-[275px] h-[426px] border-[1px]
                        border-solid border-green-4 rounded-[10px] mx-5 my-4"
            >
                <div className="max-w-sm bg-white">
                    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                        <img
                            style={{ height: "250px", width: "200px" }}
                            src={imgLink}
                            alt=""
                        />
                    </a>

                    <div className="inline justify-center">
                        <p className="font-roboto font-400 text-14px mt-[30px]">
                            {productName}
                        </p>
                        <p className="font-roboto font-700 text-14px">{price}</p>
                    </div>

                    <div className="flex mt-[15px]">

                        <div className="flex justify-center mr-[20px]">
                            <Link href={{ pathname: `./updateProduct/${productId}` }} >
                                <button
                                    type="button"
                                    className="flex p-[10px] gap-[15px] rounded-[10px] bg-white
                                    uppercase leading-normal text-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
                                    font-roboto font-700 text-14px hover:bg-[#D9D9D9] transition duration-[0.4s]"
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
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                        />
                                    </svg>
                                    EDIT
                                </button>
                            </Link>
                        </div>

                        <div className="flex justify-center ml-[20px]">

                            {/* <!-- Button trigger modal --> */}
                            <button
                                type="button"
                                className="flex p-[10px] gap-[15px] rounded-[10px] bg-white
                                uppercase leading-normal text-[#FF0000] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
                                font-roboto font-700 text-14px hover:bg-[#D9D9D9] transition duration-[0.4s]"
                                data-te-toggle="modal"
                                data-te-target="#exampleModal"
                                data-te-ripple-init
                                data-te-ripple-color="light"
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
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                                DELETE
                            </button>

                            {/* <!-- Modal --> */}
                            <div
                                data-te-modal-init
                                class="fixed left-0 top-10 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                                id="exampleModal"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div
                                    data-te-modal-dialog-ref
                                    class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
                                >
                                    <div class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                                        <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                                            {/* <!--Modal title--> */}
                                            <h5
                                                class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                                id="exampleModalLabel"
                                            >
                                                Are you sure ?
                                            </h5>
                                            {/* <!--Close button--> */}
                                            <button
                                                type="button"
                                                class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                                data-te-modal-dismiss
                                                aria-label="Close"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    class="h-6 w-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* <!--Modal body--> */}
                                        <div class="relative flex-auto p-4" data-te-modal-body-ref>
                                            This will remove {productName} from inventory
                                        </div>

                                        {/* <!--Modal footer--> */}
                                        <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                                            <button
                                                type="button"
                                                class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                                                data-te-modal-dismiss
                                                data-te-ripple-init
                                                data-te-ripple-color="light"
                                            >
                                                Close
                                            </button>
                                            <button
                                                type="button"
                                                class="ml-1 inline-block rounded bg-red-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-white hover:text-red-700 hover:border hover:border-solid hover:border-red-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                                data-te-ripple-init
                                                data-te-ripple-color="light"
                                                onClick={() => { handleDelete(productId) }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
        /* End of Product Card for seller */
    );
}
