import Footer from "@/components/Footer";
import Navbar from "@/components/navBar";
import dynamic from "next/dynamic";

const Cart = dynamic(() => import("@/components/customer/Cart"),
    { ssr: false });

export default function CartPage() {
    return (
        <>
            <Navbar />
            <Cart />
            <Footer />
        </>
    )
}