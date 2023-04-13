export default function ProductCard() {
    return (
        /* Start of Product Card for seller */
        <>

            <div className="box-border flex flex-col items-center p-[20px] gap-[80px] w-[275px] h-[426px] border-[1px]
                        border-solid border-green-4 rounded-[10px] mx-5 my-4">

                <div
                    className="max-w-sm bg-white">
                    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                        <img style={{ height: '250px', width: '200px'}}
                            src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                            alt="" />
                    </a>


                    <div className="inline justify-center">
                        <p className="font-roboto font-400 text-14px mt-[30px]">Loreum Ipsum</p>
                        <p className="font-roboto font-700 text-14px">LKR 2000.00</p>
                    </div>

                    <div className="flex mt-[15px]">

                        <div class="flex justify-center mr-[20px]">
                            <button
                                type="button"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                className="flex p-[10px] gap-[15px] rounded-[10px] bg-white
                                    uppercase leading-normal text-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
                                    font-roboto font-700 text-14px hover:bg-[#D9D9D9] transition duration-[0.4s]">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>

                                EDIT
                            </button>
                        </div>

                        <div class="flex justify-center ml-[20px]">
                            <button
                                type="button"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                className="flex p-[10px] gap-[15px] rounded-[10px] bg-white
                                    uppercase leading-normal text-[#FF0000] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
                                    font-roboto font-700 text-14px hover:bg-[#D9D9D9] transition duration-[0.4s]">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[20px] h-[20px]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>


                                DELETE
                            </button>
                        </div>


                    </div>

                </div>
            </div>

        </>
        /* End of Product Card for seller */
    );
};