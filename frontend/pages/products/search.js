'use client';

import Footer from "@/components/Footer";
import Herocarousel from "@/components/customer/heroCarousel";
import ProductCard from "@/components/customer/productCard";
import Navbar from "@/components/navBar";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function SearchResults() {
    const router = useRouter();
    const [products, setProducts] = useState([]);

    //* Search Query
    const { q } = router.query;
    const encodedQuery = encodeURI(q);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`http://127.0.0.1:5000/v1/inventory/products/search/${encodedQuery}`);
            const json = await res.json();

            if (res.ok) {
                setProducts(json)
            }
            console.log(json);
        }

        getData()

    }, [])


    return (
        <>
            <main >

                <Navbar />
                <Herocarousel />
                <div className="grid desktop-1920:grid-cols-4 desktop-1440:grid-cols-3 mobile-720:grid-cols-2 mobile-360:grid-cols-1 gap-10 w-95vw my-12 mx-auto">
                    {products && products.map(productData => (
                        <div className="inline-block w-96 ml-auto mr-auto" key={productData['product'].productId}>
                            <ProductCard productData={productData} />
                        </div>
                    ))}
                </div>
                <Footer />

            </main>
        </>
    )
}