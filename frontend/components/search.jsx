"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react"

export default function SearchBar() {

    const search = useSearchParams();
    const router = useRouter()

    const [searchQuery, setSearchQuery] = useState(search ? search.get("q") : "");


    const onSearch = (e) => {
        e.preventDefault();
        if (searchQuery != null && !searchQuery === " ") {
            const encodedQuery = encodeURI(searchQuery)
            router.push(`../products/search?q=${encodedQuery}`)
        }
    }

    return (
        <>
            <div className="bg-white rounded-lg px-5  mobile-720:ml-1 desktop-1440:ml-64 desktop-1920:ml-96 border-2 border-solid">
                <form onSubmit={onSearch}>
                    <div>
                        <input
                            className="border-0 px-5 py-2  desktop-1920:w-30vw desktop-1440:w-20vw mobile-720:w-20vw mobile-360:w-10/12 focus:outline-none focus:text-black"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            value={searchQuery}
                            type="text"
                            placeholder="Search your product"
                        />
                        <button className="text-green-6 bg-white mt-auto mb-auto pt-3" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20}>
                                {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div >
        </>
    )
}