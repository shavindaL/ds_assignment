import Navbar from "@/components/navBar";
import ProductOverview from "@/components/customer/productOverview";

export const getStaticPaths = async () => {
    const res = await fetch("http://127.0.0.1:5000/v1/inventory/products");
    const data = await res.json();

    const paths = data.map((product) => {
        return {
            params: { id: product.productId.toString() },
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
        <main className="bg-black min-h-screen w-screen pb-96">
            <Navbar />
            <ProductOverview product={product} />
        </main>
    );
}
