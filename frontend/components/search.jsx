"use client"

import { useRouter } from "next/router";
import { useState } from "react"

export default function SearchBar() {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState("");

    const onSearch = (e) => {
        e.preventDefault();
        const encodedQuery = encodeURI(searchQuery)
        router.push(`../products/search?q=${encodedQuery}`)
    }

    return (
        <>
            <div className="bg-white rounded-lg px-5  mobile-720:ml-1 desktop-1440:ml-64 desktop-1920:ml-96 border-2 border-solid">
                <form onSubmit={onSearch}>
                    <input
                        className="border-0 px-5 py-2  desktop-1920:w-30vw desktop-1440:w-20vw mobile-720:w-20vw mobile-360:w-10/12 focus:outline-none"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        type="text"
                        placeholder="Search your product"
                    />
                    <button className="text-green-6 bg-white mt-auto mb-auto" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="hover:fill-green-5">
                            <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5236 15.1308L13.5582 11.1654C14.2486 10.0474 14.666 8.74321 14.666 7.33301C14.666 3.28293 11.3831 0 7.33301 0C3.28293 0 0 3.28293 0 7.33301C0 11.3831 3.28293 14.666 7.33301 14.666C8.74321 14.666 10.0474 14.2486 11.1642 13.5593L15.1308 17.5248C15.4501 17.8334 15.8778 18.0043 16.3218 18.0005C16.7659 17.9967 17.1906 17.8186 17.5045 17.5045C17.8184 17.1905 17.9964 16.7656 17.9999 16.3216C18.0035 15.8776 17.8325 15.4499 17.5236 15.1308ZM7.33301 12.4097C4.52955 12.4097 2.25631 10.1365 2.25631 7.33301C2.25631 4.52955 4.52955 2.25631 7.33301 2.25631C10.1365 2.25631 12.4097 4.52955 12.4097 7.33301C12.4097 10.1365 10.1365 12.4097 7.33301 12.4097Z" fill="black" fillOpacity="0.45" />
                            </svg>

                        </svg>
                    </button>
                </form>
            </div>
        </>
    )
}