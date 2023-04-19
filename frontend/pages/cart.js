import Footer from "@/components/Footer";
import Navbar from "@/components/navBar";
import dynamic from "next/dynamic";

const Shopcart = dynamic(() => import("@/components/Shoppingcart"),
    { ssr: false });

export default function CartPage() {
    return (
        <>
            <Navbar />
            <Shopcart />
            <Footer />
        </>
    )
}