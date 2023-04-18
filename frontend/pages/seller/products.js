import ProductCard from "@/components/seller/ProductCard";
import ProductForm from "@/components/seller/ProductForm";
import SellerSearchBar from "@/components/seller/SellerSearchBar";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/components/seller/Sidebar"),
    { ssr: false })

export default function Products() {

    return (
        <>
            <Sidebar />

            <div className="flex">

                <p className="ml-[336px]  font-roboto font-[500] text-[38px] mt-[44px]">
                    Products
                </p>

                <ProductForm />

            </div>

            <SellerSearchBar />

            <div className="ml-[292px] grid desktop-1920:grid-cols-4 desktop-1440:grid-cols-3">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => <ProductCard key={idx}/>)}
            </div>


        </>
    )
}
