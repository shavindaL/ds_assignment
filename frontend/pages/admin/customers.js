import dynamic from "next/dynamic";
import Customers from "@/components/admin/Customers";

// Sidebar component is dynamically imported to prevent hydration error
const Sidebar = dynamic(() => import("@/components/admin/Sidebar"),
    { ssr: false });


export default function AdminDashboard() {
    return (
        /* Start of Dashboard page for admin */
        <>
            <Sidebar />

            <center>

                <div className="pl-[130px] pr-[130px] w-[1007px] h-[919px] ml-[332px] mt-[40px] mb-[65px]">

                    <center>
                        <p className="justify-center font-roboto font-[500] text-[38px]">
                            Customers
                        </p>
                    </center>


                    <div
                        className="mt-[32px] border border-[#6469DE] rounded-[5px] bg-white p-[10px]
            shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                        <Customers />
                    </div>

                </div>

            </center>
        </>
        /* End of Dashboard page for admin */
    );
};