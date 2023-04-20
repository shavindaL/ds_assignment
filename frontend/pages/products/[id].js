import Navbar from "@/components/navBar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const ProductOverview = dynamic(() => import("@/components/customer/productOverview"),
    { ssr: false })

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

export default function ProductOverviewPage({ product }) {
    return (
        <main className="bg-black min-h-screen w-screen">
            <Navbar />
            <ProductOverview productData={product} />
            <Footer />
        </main>
    );
}
