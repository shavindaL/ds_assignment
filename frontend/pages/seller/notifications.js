import Notifications from "@/components/seller/Notifications";
import dynamic from "next/dynamic";

// Sidebar component is dynamically imported to prevent hydration error
const Sidebar = dynamic(() => import("@/components/seller/Sidebar"),
    { ssr: false });

export default function Products() {

    return (
        /* Start of Notifications page for seller */
        <>
            <Sidebar />
            <p className="font-roboto font-[500] text-[38px] mt-[44px] ml-[336px]">
                Notifications
            </p>

            <div className="h-[54px]" />

            <Notifications />
        </>
        /* End of Notifications page for seller */
    )
}



