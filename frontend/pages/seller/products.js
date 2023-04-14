import ProductCard from "@/components/seller/ProductCard";
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

                <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="p-[10px] mt-[44px] ml-[863px] justify-center mb-2 flex rounded-[5px] px-6 py-2.5
                                        leading-normal font-roboto font-[700] text-[14px] text-white shadow-md transition duration-150
                                        ease-in-out hover:shadow-lg focus:outline-none
                                        focus:ring-0 bg-green-5 ml-[1280px]
                                        w-[150px] h-[48px]"
                >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={15} fill="#FFF">
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32
                         14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7
                        0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                    &nbsp;&nbsp;&nbsp;&nbsp;Create New

                </button>
                
            </div>

            <SellerSearchBar />

            <div className="ml-[292px] grid desktop-1920:grid-cols-4 desktop-1440:grid-cols-3">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(() => <ProductCard />)}
            </div>


        </>
    )
}
