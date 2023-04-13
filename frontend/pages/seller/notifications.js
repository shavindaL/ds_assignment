import Notifications from "@/components/seller/Notifications";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/components/seller/Sidebar"),
    { ssr: false })

export default function Products() {

    return (
        <>
            <Sidebar />
            <p className="font-roboto font-[500] text-[38px] mt-[44px] ml-[336px]">
                Notifications
            </p>
            <div className="h-[54px]" />
            <Notifications />

        </>
    )
}



