import Footer from "@/components/Footer";
import Navbar from "@/components/navBar";
import { useAuthContext } from "@/hooks/userAuthContext";
import dynamic from "next/dynamic";
import Error from "next/error";

const Shopcart = dynamic(() => import("@/components/Shoppingcart"),
    { ssr: false });

export default function CartPage() {
    const { user } = useAuthContext();

    if (user) {
        return (
            <>
                <Navbar />
                <Shopcart />
                <Footer />
            </>
        )
    }
    else {
        return <Error statusCode={401} title="Unauthorized" />
    }
}