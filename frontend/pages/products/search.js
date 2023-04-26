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

    const { data, error } = useSWR(`http://10.5.0.3:5000/v1/inventory/products/search/${encodedQuery}`, fetcher);

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
                        :
                        <div
                            class="mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
                            role="alert" >
                            <span class="mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="h-5 w-5">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            No such product.
                        </div>
                    }
                </div>
                <Footer />

            </main >
        </>
    )
}