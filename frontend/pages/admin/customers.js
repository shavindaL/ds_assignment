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
            <p className="font-roboto font-[500] text-[38px] mt-[44px] ml-[336px]">
                Customers
            </p>

            <center>

                <div className="pl-[50px] pr-[100px] ml-[332px] mt-[40px] mb-[65px]">
                    <Customers />
                </div>

            </center>
        </>
        /* End of Dashboard page for admin */
    );
};