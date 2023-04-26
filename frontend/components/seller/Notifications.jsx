export default function Notifications() {
  return (
    /* Start of Notifications for seller */
    <>
      <center className="ml-[200px]">
        <div
          className="flex justify-center border-b-[1px] border-[#95DE64] pb-[10px] pt-[10px] pl-[30px] pr-[30px]
                w-[655px] h-[52px]"
        >
          <button
            className="font-roboto font-[500] text-[24px] text-green-8 ml-[82px]
                    focus:underline"
          >
            Today
          </button>
          <button className="font-roboto font-[500] text-[24px] text-[#D9D9D9] ml-[92px] focus:underline">
            Previous
          </button>
          <button className="font-roboto font-[500] text-[20px] text-[#FF0000] ml-[92px]">
            clear all
          </button>
        </div>

        
          <div
            id="accordionExample"
            className="justify-center w-[655px] h-[72px] rounded-[5px] mt-[35px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          >
            <div className="rounded-[5px] bg-white">
              <h2 className="mb-0" id="headingOne">
                <button
                  className="group relative flex w-full items-center rounded-[5px] border-0
                            bg-green-3 p-[15px] text-left text-base text-white transition
                            [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none
                            font-roboto font-[700] text-[14px]"
                  type="button"
                  data-te-collapse-init
                  data-te-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div className="flex">
                    <p className="ml-[43px]">27/02/2023</p>
                    <p className="ml-[92px]">John</p>
                    <p className="ml-[132px]">LKR 4000</p>
                  </div>
                  <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="!visible"
                data-te-collapse-item
                data-te-collapse-show
                aria-labelledby="headingOne"
                data-te-parent="#accordionExample"
              >
                <div class="py-4 px-5 flex justify-center">
                  <div className="flex">
                    <p className="font-roboto font-[700] text-[14px]">
                      Customer Name: &nbsp;
                    </p>
                    <p className="font-roboto font-[400] text-[14px]">
                      John Smith
                    </p>
                  </div>

                  <p className="pl-[151px]"></p>

                  <div className="flex">
                    <p className="font-roboto font-[700] text-[14px]">
                      Ordered Date: &nbsp;
                    </p>
                    <p className="font-roboto font-[400] text-[14px]">
                      27/02/2023
                    </p>
                  </div>
                </div>

                <div class="py-4 px-5 flex justify-center mb-[20px]">
                  <div className="flex">
                    <p className="font-roboto font-[700] text-[14px]">
                      Order Details: &nbsp;
                    </p>

                    <ul className="font-roboto font-[400] text-[14px] list-disc relative right-[70px]">
                      {" "}
                      &nbsp;&nbsp;
                      <li>Whey-Protein x 2</li>
                      <li>Syrup x 1</li>
                    </ul>
                  </div>

                  <p className="pr-[20px]"></p>

                  <div className="flex  relative left-[118px]">
                    <p className="font-roboto font-[700] text-[14px]">
                      Total Cost: &nbsp;
                    </p>
                    <p className="font-roboto font-[400] text-[14px]">
                      LKR 4000
                    </p>
                  </div>

                  <p className="pl-[151px]"></p>
                </div>

                <div class="flex justify-center pt-[40px] pb-[40px]">
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mb-2 flex rounded-[5px] px-6 py-2.5
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
                    &nbsp;&nbsp;ACCEPT
                  </button>

                  <div className="w-[40px]" />

                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mb-2 flex rounded-[5px] px-6 py-2.5
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
                    &nbsp;&nbsp;REJECT
                  </button>
                </div>
              </div>
            </div>


          <br />

            {/************************************************************************** */}
            <div className="rounded-[5px] bg-white">
              <h2 className="mb-0" id="headingOne">
                <button
                  className="group relative flex w-full items-center rounded-[5px] border-0
                            bg-green-3 p-[15px] text-left text-base text-white transition
                            [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none
                            font-roboto font-[700] text-[14px]"
                  type="button"
                  data-te-collapse-init
                  data-te-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div className="flex">
                    <p className="ml-[43px]">27/02/2023</p>
                    <p className="ml-[92px]">John</p>
                    <p className="ml-[132px]">LKR 4000</p>
                  </div>
                  <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="!visible"
                data-te-collapse-item
                data-te-collapse-show
                aria-labelledby="headingOne"
                data-te-parent="#accordionExample"
              >
                <div class="py-4 px-5 flex justify-center">
                  <div className="flex">
                    <p className="font-roboto font-[700] text-[14px]">
                      Customer Name: &nbsp;
                    </p>
                    <p className="font-roboto font-[400] text-[14px]">
                      John Smith
                    </p>
                  </div>

                  <p className="pl-[151px]"></p>

                  <div className="flex">
                    <p className="font-roboto font-[700] text-[14px]">
                      Ordered Date: &nbsp;
                    </p>
                    <p className="font-roboto font-[400] text-[14px]">
                      27/02/2023
                    </p>
                  </div>
                </div>

                <div class="py-4 px-5 flex justify-center mb-[20px]">
                  <div className="flex">
                    <p className="font-roboto font-[700] text-[14px]">
                      Order Details: &nbsp;
                    </p>

                    <ul className="font-roboto font-[400] text-[14px] list-disc relative right-[70px]">
                      {" "}
                      &nbsp;&nbsp;
                      <li>Whey-Protein x 2</li>
                      <li>Syrup x 1</li>
                    </ul>
                  </div>

                  <p className="pr-[20px]"></p>

                  <div className="flex  relative left-[118px]">
                    <p className="font-roboto font-[700] text-[14px]">
                      Total Cost: &nbsp;
                    </p>
                    <p className="font-roboto font-[400] text-[14px]">
                      LKR 4000
                    </p>
                  </div>

                  <p className="pl-[151px]"></p>
                </div>

                <div class="flex justify-center pt-[40px] pb-[40px]">
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mb-2 flex rounded-[5px] px-6 py-2.5
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
                    &nbsp;&nbsp;ACCEPT
                  </button>

                  <div className="w-[40px]" />

                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mb-2 flex rounded-[5px] px-6 py-2.5
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
                    &nbsp;&nbsp;REJECT
                  </button>
                </div>
              </div>
            </div>
            {/******************************************************************************************* */}

            <br />

            <span>
              <button className="font-roboto font-[400] text-[12px] text-green-7">
                View all
              </button>
            </span>
          </div>
        </center>
     
    </>
    /* End of Notifications for seller */
  );
}
