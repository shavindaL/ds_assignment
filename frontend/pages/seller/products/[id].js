import ProductForm from "@/components/seller/ProductForm";
import SellerSearchBar from "@/components/seller/SellerSearchBar";
import dynamic from "next/dynamic";


export const getStaticPaths = async () => {
    const res = await fetch("http://10.5.0.3:5000/v1/seller/sellers");
    const data = await res.json();

    const paths = data.map((sellerData) => {
        return {
            params: { id: sellerData.sellerID.toString() },
        };
    });
    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`http://10.5.0.3:5000/v1/inventory/products/seller/${id}`);
    const data = await res.json();
    console.log(data);
    return {
        props: { products: data }
    }
};




const Sidebar = dynamic(() => import("@/components/seller/Sidebar"),
    { ssr: false })

const ProductCard = dynamic(() => import("@/components/seller/ProductCard"),
    { ssr: false })

export default function Products({ products }) {
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
                {products && products.map(productData => <ProductCard key={productData["product"].productId} productData={productData} />)}
            </div>


        </>
    )
}
