import Link from "next/link";

export default function Pagination() {
    return (
        /* Start of Pagination for seller */
        <>
            <div className="flex justify-center">
                <nav aria-label="Page navigation example">
                    <ul className="list-style-none flex border-[1px] rounded-[5px] border-green-4">
                        <li>
                            <Link
                                className="relative block rounded-t-l-[1px] rounded-b-l-[1px] bg-transparent py-1.5 px-3
                                font-[700] font-roboto text-[14px] transition-all duration-300 hover:bg-green-2 focus:bg-green-5"
                                href="#"
                            >Previous</Link>
                        </li>
                        <li className="border-l-[1px] border-r-[1px] border-green-4">
                            <Link
                                className="relative block rounded-t-l-[1px] rounded-b-l-[1px] bg-transparent py-1.5 px-3
                                font-[700] font-roboto text-[14px] transition-all duration-300 hover:bg-green-2 focus:bg-green-5"
                                href="#"
                            >1</Link>
                        </li>
                        <li className="border-r-[1px]  border-green-4" aria-current="page">
                            <Link
                                className="relative block rounded-t-l-[1px] rounded-b-l-[1px] bg-transparent py-1.5 px-3
                                font-[700] font-roboto text-[14px] transition-all duration-300 hover:bg-green-2 focus:bg-green-5"
                                href="#"
                            >2</Link>
                        </li>
                        <li className="border-r-[1px]  border-green-4">
                            <Link
                                className="relative block rounded-t-l-[1px] rounded-b-l-[1px] bg-transparent py-1.5 px-3
                                font-[700] font-roboto text-[14px] transition-all duration-300 hover:bg-green-2 focus:bg-green-5"
                                href="#"
                            >3</Link>
                        </li>
                        <li>
                            <Link
                                className="relative block rounded-t-l-[1px] rounded-b-l-[1px] bg-transparent py-1.5 px-3
                                font-[700] font-roboto text-[14px] transition-all duration-300 hover:bg-green-2 focus:bg-green-5"
                                href="#"
                            >Next</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
        /* End of Pagination for seller */
    );
};