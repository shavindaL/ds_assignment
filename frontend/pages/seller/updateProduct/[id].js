import UpdateProductForm from "@/components/seller/updateProductForm";
import dynamic from "next/dynamic";

export const getStaticPaths = async () => {
    const res = await fetch("http://127.0.0.1:5000/v1/inventory/products");
    const data = await res.json();

    const paths = data.map((productData) => {
        return {
            params: { id: productData['product'].productId.toString() },
        };
    });
    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`http://127.0.0.1:5000/v1/inventory/products/${id}`);
    const data = await res.json();
    return {
        props: { product: data }
    }
};

const Sidebar = dynamic(() => import("@/components/seller/Sidebar"),
    { ssr: false })

export default function Home({ product }) {
    return (
        <>
            <Sidebar />
            <div className="ml-[292px] grid desktop-1920:grid-cols-4 desktop-1440:grid-cols-3">
                <UpdateProductForm currentProductData={product['product']} />
            </div>


        </>
    )
}
