import { Margarine } from "next/font/google";

export default function ProductOverviewCard() {
    return (
        /* Start of Product Overview Card for seller */
        <>
            <button
                type="button"
                classNameName="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-toggle="modal"
                data-te-target="#exampleModalLg"
                data-te-ripple-init
                data-te-ripple-color="light">
                Large modal
            </button>

            <div
                data-te-modal-init
                className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden 
                outline-none"
                id="exampleModalLg"
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
                            className="grid justify-items-stretch flex-shrink-0 items-center rounded-t-md p-2">


                            <button
                                type="button"
                                className="pt-[10px] pr-[10px] justify-self-end box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <h5
                            className="text-[28px] font-[500] font-roboto leading-normal flex border-green-5
                            justify-center border-b-[1px] mb-[10px] pb-[10px]"
                            id="exampleModalScrollableLabel">
                            Product Name
                        </h5>

                        <div className="flex justify-center mt-[15px]">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8FooisdI9HtDC1aanCbSF4ogKL4_4D6MeQ&usqp=CAU" 
                            className="h-[100px] w-[100px] border-[1px] border-green-5 rounded-[10px] mr-[20px] p-[10px]"/>

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8FooisdI9HtDC1aanCbSF4ogKL4_4D6MeQ&usqp=CAU"
                            className="h-[100px] w-[100px] border-[1px] border-green-5 rounded-[10px] mr-[10px] p-[10px]"/>

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8FooisdI9HtDC1aanCbSF4ogKL4_4D6MeQ&usqp=CAU" 
                            className="h-[100px] w-[100px] border-[1px] border-green-5 rounded-[10px] ml-[20px] p-[10px]"/>

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8FooisdI9HtDC1aanCbSF4ogKL4_4D6MeQ&usqp=CAU" 
                            className="h-[100px] w-[100px] border-[1px] border-green-5 rounded-[10px] ml-[20px] p-[10px]"/>
                        </div>

                        <div className="flex relative p-4 leading-[4]">
                            <div>
                                <p className="font-roboto text-[16px] font-[500] pl-[120px] italic ">Product ID</p>
                                <p className="font-roboto text-[16px] font-[500] pl-[120px] italic">Unit Price (LKR)</p>
                                <p className="font-roboto text-[16px] font-[500] pl-[120px] italic">Quantity in stock</p>
                                <p className="font-roboto text-[16px] font-[500] pl-[120px] italic">Availability</p>
                            </div>


                            <div>
                                <p className="font-roboto text-[16px] font-[100] pl-[50px] italic">123</p>
                                <p className="font-roboto text-[16px] font-[100] pl-[50px] italic">2300.00</p>
                                <p className="font-roboto text-[16px] font-[100] pl-[50px] italic">10</p>
                                <p className="font-roboto text-[16px] font-[100] pl-[50px] italic">In Stock</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
        /* End of Product Overview Card for seller */
    );
};