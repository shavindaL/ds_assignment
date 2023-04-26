import OrderNotifications from "@/components/admin/OrderNotifications";
import dynamic from "next/dynamic";

// Sidebar component is dynamically imported to prevent hydration error
const Sidebar = dynamic(() => import("@/components/admin/Sidebar"),
    { ssr: false });

export default function OrdersPage() {

    return (
        /* Start of Orders page for admin */
        <>
            <Sidebar/>
            <p className="font-roboto font-[500] text-[38px] mt-[44px] ml-[336px]">
                Pending Orders
            </p>

            <div className="h-[54px]" />

            <OrderNotifications />
        </>
        /* End of Orders page for admin */
    )
}