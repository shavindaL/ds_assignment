import Navbar from "@/components/navBar";
import ProductCard from "@/components/productCard";

export const getStaticProps = async () => {
    const res = await fetch("http://127.0.0.1:5000/v1/inventory/products");
    const data = await res.json();

    return {
        props: {
            products: data
        }
    }
}

export default function ProductLiSt({ products }) {

    return (
        <main className="bg-black min-h-screen w-screen pb-96">
            <Navbar />
            <div className="grid desktop-1920:grid-cols-4 desktop-1440:grid-cols-3 mobile-720:grid-cols-2 mobile-360:grid-cols-1 gap-10 w-95vw my-12 mx-auto">
                {products && products.map(product => (
                    <div className="inline-block w-96 ml-auto mr-auto" key={product.productId}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </main>
    )
}