import Navbar from "@/components/navBar";
import ProductForm from "@/components/seller/ProductForm";


export default function ProductOverviewPage({ product }) {
    return (
        <main className="bg-black min-h-screen w-screen pb-96">
            <Navbar />
            <ProductForm />
        </main>
    );
}
