'use client';

import useSWR from 'swr';
import { useSearchParams } from 'next/navigation';
import Footer from "@/components/Footer";
import ProductCard from "@/components/customer/productCard";
import Navbar from "@/components/navBar";

//* fetch data
const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Fetch failed")
    }
    const json = await res.json();
    return json;
}


export default function SearchResults() {
    const search = useSearchParams();

    //* Search Query
    const query = search.get("q");
    const encodedQuery = encodeURI(query);

    const { data, error } = useSWR(`http://127.0.0.1:5000/v1/inventory/products/search/${encodedQuery}`, fetcher);

    const products = data

    return (
        <>
            <main >

                <Navbar />
                <h1 className="text-4xl font-700 font-roboto ml-24 mt-16">
                    Search Results
                </h1>
                <div className="grid desktop-1920:grid-cols-4 desktop-1440:grid-cols-3 mobile-720:grid-cols-2 mobile-360:grid-cols-1 gap-10 w-95vw my-12 mx-auto">
                    {products && products.length !== 0 ? products.map(productData => (
                        <div className="inline-block w-96 ml-auto mr-auto" key={productData['product'].productId}>
                            <ProductCard productData={productData} />
                        </div>
                    ))
                        : <p>Nothing</p>}
                </div>
                <Footer />

            </main>
        </>
    )
}