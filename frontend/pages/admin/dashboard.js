import dynamic from "next/dynamic";
import OrderNotifications from "@/components/admin/OrderNotifications";

// Sidebar component is dynamically imported to prevent hydration error
const Sidebar = dynamic(() => import("@/components/admin/Sidebar"),
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


export default function AdminDashboard() {
    return (
        /* Start of Dashboard page for admin */
        <>
            <Sidebar />

            <center>

                <div className="pl-[130px] pr-[130px] w-[1007px] h-[919px] ml-[332px] mt-[40px] mb-[65px]">

                    <center>
                        <p className="justify-center font-roboto font-[500] text-[38px]">
                            Welcome back!
                        </p>

                        <p className="justify-center font-roboto font-[500] text-[20px]">
                            {date}&nbsp;{month},&nbsp; {day}
                        </p>



                        <div
                            className="mt-[32px] block rounded-lg bg-[#F8F9F9] p-6 
                            shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] 
                            dark:bg-neutral-700">
                            <p className="justify-center font-roboto font-[500] text-[20px]">
                                Total Revenue
                            </p>
                            <p class="mb-4 font-roboto text-base text-neutral-600 dark:text-neutral-200">
                                LKR 200.00
                            </p>
                        </div>

                    </center>


                    <div
                        className="mt-[32px] border border-[#6469DE] rounded-[5px] bg-white p-[10px]
            shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                        <div className="flex p-[10px] font-roboto font-[500] text-[24px]">Pending Orders</div>
                        <OrderNotifications />
                    </div>

                </div>

            </center>
        </>
        /* End of Dashboard page for admin */
    );
};