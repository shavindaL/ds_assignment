export default function ProductForm() {
    return (
        /* Start of Product Form for seller */
        <>

            <button
                type="button"
                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-toggle="modal"
                data-te-target="#exampleModalCenteredScrollable"
                data-te-ripple-init
                data-te-ripple-color="light">
                Vertically centered scrollable modal
            </button>

            <form>
                <div
                    data-te-modal-init
                    className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                    id="exampleModalCenteredScrollable"
                    tabindex="-1"
                    aria-labelledby="exampleModalCenteredScrollable"
                    aria-modal="true"
                    role="dialog">
                    <div
                        data-te-modal-dialog-ref
                        className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                        <div
                            className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                            <div
                                className="flex flex-shrink-0 items-center justify-between rounded-t-md border-neutral-100 border-opacity-100 pr-4 pt-4 dark:border-opacity-50">

                                <div />

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
                                        className="h-6 w-6">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>


                            <div className="relative p-4">
                                <label className="text-black font-roboto font-500 text-[20px]">Product Name</label>


                                <input className="w-[464px] h-[46px] border-[1px] rounded-[10px] border-green-3
                                 text-[12px] mt-[5px] p-[10px] font-roboto text-[16px]" type="text" />

                            </div>

                            <div className="relative p-4">
                                <label className="text-black font-roboto font-500 text-[20px]">Description</label>

                                <textarea className="w-[464px] h-[89px] border-[1px] rounded-[10px] border-green-3
                                 text-[12px] mt-[5px] p-[10px] font-roboto text-[16px]" style={{ resize: "none" }} type="text" />

                            </div>

                            <div className="relative p-4">
                                <label className="relative p-4text-black font-roboto font-500 text-[20px]">Images</label>

                                <input
                                    className="mt-[5px] relative m-0 block w-full min-w-0
                                        flex-auto rounded border border-solid border-neutral-300
                                        bg-clip-padding py-[0.32rem] px-3 text-base font-normal
                                        text-neutral-700 transition duration-300 ease-in-out
                                        file:-mx-3 file:-my-[0.32rem] file:overflow-hidden 
                                        file:rounded-none file:border-0 file:border-solid
                                        file:border-inherit file:bg-green-3 file:px-3 
                                        file:py-[0.32rem] file:text-neutral-700 file:transition 
                                        file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] 
                                        file:[border-inline-end-width:1px] hover:bg-green-1
                                        focus:text-neutral-700 focus:shadow-[0_0_0_1px] 
                                        focus:shadow-primary focus:outline-none dark:border-neutral-600 
                                        dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"

                                    type="file"
                                />
                            </div>


                            <div className="relative p-4">

                                <input
                                    className="relative m-0 block w-full min-w-0
                                        flex-auto rounded border border-solid border-neutral-300
                                        bg-clip-padding py-[0.32rem] px-3 text-base font-normal
                                        text-neutral-700 transition duration-300 ease-in-out
                                        file:-mx-3 file:-my-[0.32rem] file:overflow-hidden 
                                        file:rounded-none file:border-0 file:border-solid
                                        file:border-inherit file:bg-green-3 file:px-3 
                                        file:py-[0.32rem] file:text-neutral-700 file:transition 
                                        file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] 
                                        file:[border-inline-end-width:1px] hover:bg-green-1
                                        focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] 
                                        focus:shadow-primary focus:outline-none dark:border-neutral-600 
                                        dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"

                                    type="file"
                                />
                            </div>


                            <div className="relative p-4">

                                <input
                                    className="mt-[5px] relative m-0 block w-full min-w-0
                                        flex-auto rounded border border-solid border-neutral-300
                                        bg-clip-padding py-[0.32rem] px-3 text-base font-normal
                                        text-neutral-700 transition duration-300 ease-in-out
                                        file:-mx-3 file:-my-[0.32rem] file:overflow-hidden 
                                        file:rounded-none file:border-0 file:border-solid
                                        file:border-green-3 file:bg-green-3 file:px-3 
                                        file:py-[0.32rem] file:text-neutral-700 file:transition 
                                        file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] 
                                        file:[border-inline-end-width:1px] hover:bg-green-1
                                        focus:border-green-3 focus:text-neutral-700 focus:shadow-[0_0_0_1px] 
                                        focus:shadow-primary focus:outline-none dark:border-neutral-600 
                                        dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"

                                    type="file"
                                />
                            </div>


                            <div className="relative p-4">

                                <input
                                    className="mt-[5px] relative m-0 block w-full min-w-0
                                    flex-auto rounded border border-solid border-neutral-300
                                    bg-clip-padding py-[0.32rem] px-3 text-base font-normal
                                    text-neutral-700 transition duration-300 ease-in-out
                                    file:-mx-3 file:-my-[0.32rem] file:overflow-hidden 
                                    file:rounded-none file:border-0 file:border-solid
                                    file:border-inherit file:bg-green-3 file:px-3 
                                    file:py-[0.32rem] file:text-neutral-700 file:transition 
                                    file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] 
                                    file:[border-inline-end-width:1px] hover:bg-green-1
                                    focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] 
                                    focus:shadow-primary focus:outline-none dark:border-neutral-600 
                                    dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"

                                    type="file"
                                />
                            </div>


                            <div className="flex">
                                <div className="relative p-4">
                                    <label className="text-black font-roboto font-500 text-[20px]">Category</label>

                                    <select className="w-[218px] h-[45px] border-[1px] rounded-[10px] border-green-3 text-[16px] font-400 pl-[10px] mt-[5px]">
                                        <option>&nbsp;&nbsp;A</option>
                                    </select>

                                </div>

                                <div className="relative p-4">
                                    <label className="text-black font-roboto font-500 text-[20px]">Price (Rs.)</label>
                                    <input className="w-[218px] h-[45px] border-[1px] rounded-[10px] border-green-3 text-[16px] font-400 pl-[10px] mt-[5px]"
                                        type="text"></input>
                                </div>


                            </div>


                            <div className="mt-[38px] flex justify-center">
                                <div>
                                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            className="p-[1px] relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem]
                                            h-[20px] w-[20px] appearance-none rounded-[0.25rem] 
                                            border-[0.125rem] border-solid border-neutral-300 outline-none 
                                            before:pointer-events-none before:absolute before:h-[0.875rem] 
                                            before:w-[0.875rem] before:scale-0 before:rounded-full 
                                            before:bg-transparent before:opacity-0 
                                            before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] 
                                            checked:border-green-5 checked:bg-green-5 checked:before:opacity-[0.16] 
                                            checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px 
                                            checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                                            type="checkbox"
                                            value=""
                                            id="checkboxDefault"
                                        />
                                        <label
                                            className="inline-block pl-[0.15rem] hover:cursor-pointer
                                            font-roboto font-400 text-[12px]"
                                            for="checkboxDefault">
                                            Publish on site
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div className="mt-[30px] mb-[20px] flex justify-center">
                                <button
                                    type="button"
                                    className="h-[32px] w-[130px] inline-block rounded-[2px] border border-[#73D13D] px-6 pt-[4px] pb-[px] 
                                    text-[14px] font-roboto font-[400px] leading-normal text-[#73D13D] transition  bg-[#FFFF]
                                    duration-150 ease-in-out hover:border-success-600 hover:bg-green-2
                                    hover:text-success-600 focus:border-success-600 
                                    focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 
                                    active:text-success-700"
                                    data-te-ripple-init>
                                    Submit item
                                </button>
                            </div>


                        </div>
                    </div>
                </div>





            </form>

        </>
        /* End of Product Form for seller */
    );
};