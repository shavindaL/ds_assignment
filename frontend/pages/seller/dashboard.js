import SalesTable from "@/components/seller/SalesTable";
import dynamic from "next/dynamic";
import Image from "next/image";

// Sidebar component is dynamically imported to prevent hydration error
const Sidebar = dynamic(() => import("@/components/seller/Sidebar"),
    { ssr: false });

// Variable to store current date object
const dateObj = new Date();

// Array of month names
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Array of day names
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Variable to store the date
const date = dateObj.getDate();

// Variable to store the month name
const month = monthNames[dateObj.getMonth()];

// Variable to store the day name
const day = days[dateObj.getDay()];

export default function Dashboard() {
    return (
        /* Start of Dashboard page for seller */
        <>
            <Sidebar />

            <center>
               
                    <div className="pl-[130px] pr-[130px] w-[1007px] h-[919px] ml-[332px] mt-[40px] mb-[65px]">

                        <center>
                            <p className="justify-center font-roboto font-[500] text-[38px]">
                                Welcome back, Dan!
                            </p>

                            <p className="justify-center font-roboto font-[500] text-[20px]">
                                {date}&nbsp;{month},&nbsp; {day}
                            </p>
                        </center>


                        <div className="grid bg-green-4 h-[180px] w-[747px] mt-[32px] rounded-[15px] p-[30px]">

                            <div className="font-roboto font-[500] text-[30px] text-white w-[138px] h-[40px]">
                                Good Job!
                            </div>

                            <div className="flex">

                                <p className="font-roboto font-[500] text-[20px] text-white mt-[15px] w-[247px] h-[56px]">You currently reached the 100 customer milepost 😃</p>


                                <img className="ml-[335px] relative bottom-[40px]" src="/cartImage.png" alt="cart" height={120} width={112.11} />

                            </div>




                        </div>

                        <div className="flex mt-[32px] w-[744px] h-[126px]">

                            <div className="border border-green-4 w-[149px] h-[126px] justify-center pt-[26px] pb-[26px] pl-[25px] pr-[25px] rounded-[15px]">
                                <p className="font-roboto font-[500] text-[38px]">+6.9K</p>
                                <p className="font-roboto font-[400] text-[14px]">Orders</p>
                            </div>

                            <div className="border border-green-4 w-[149px] h-[126px] justify-center pt-[26px] pb-[26px] pl-[25px] pr-[25px] rounded-[15px] ml-[149px]">
                                <p className="font-roboto font-[500] text-[38px]">+2.4K</p>
                                <p className="font-roboto font-[400] text-[14px]">Deliveries</p>
                            </div>

                            <div className="border border-green-4 w-[149px] h-[126px] justify-center pt-[26px] pb-[26px] pl-[25px] pr-[25px] rounded-[15px] ml-[149px]">
                                <p className="font-roboto font-[500] text-[38px]">+1.0K</p>
                                <p className="font-roboto font-[400] text-[14px]">Total Sales</p>
                            </div>
                        </div>

                        <div
                            className="mt-[32px] border border-green-4 rounded-[5px] bg-white p-[10px]
                        shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                            <div className="flex p-[10px] font-roboto font-[500] text-[24px]">Recent Sales</div>
                            <SalesTable />
                        </div>

                    </div>
           
            </center>
        </>
         /* End of Dashboard page for seller */
    );
};