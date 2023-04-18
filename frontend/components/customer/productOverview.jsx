import { useEffect, useState } from "react";
import StarRating from "./starRating";

export default function ProductOverview({productData}) {
    const imgLinks = productData["imageUrls"];
    const productName = productData["product"].productName;
    const reviewCount = 69;
    const price = productData["product"].unitPrice;
    const stock = productData["product"].unitsInStock;
    const productDescription = productData["product"].productDescription;

    const [mainImg, setMainImg] = useState(imgLinks[0]);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
    useEffect(() => setTotal(price * count), [count]);

    return (
        <div className="bg-white p-16 grid grid-cols-3 gap-4">
            <div className="">
                <div className="w-96 h-96 border-green-9 border-solid border-2 bg-green-5 rounded-lg relative mx-auto">
                    <img
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"
                        src={mainImg}
                    />
                </div>
                <div className="py-2 mt-4 mx-4 border-green-9 border-solid border-2 bg-green-5 rounded-lg">
                    <div className="grid grid-cols-4">
                        {imgLinks && imgLinks.map((link, idx) => (
                            <div
                                key={productData["product"].productImages[idx]}
                                className="px-2 w-28 opacity-70 hover:cursor-pointer hover:scale-150 hover:opacity-100 hover:transform transition ease-in-out"
                            >
                                <img
                                    src={link}
                                    className="w-44 px-1 hover:rounded-lg"
                                    onClick={() => setMainImg(imgLinks[idx])}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                {/* Product Details Section */}
                <div className="w-210 h-auto border-green-9 border-solid border-2 rounded-lg relative p-8">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h1 className="text-4xl font-700">{productName}</h1>
                                </td>
                                <td>
                                    <p className="ml-8 text-3xl font-700">{`LKR ${price} /each`}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <StarRating />
                                    <p className="inline-block px-2">{`${reviewCount} reviews`}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <ul className="px-12">
                        {productDescription}
                    </ul>
                </div>
                {/* Product Details Section ends here*/}

                {/* Product Count and total */}
                <div className="w-210 h-auto border-green-9 border-solid border-2 rounded-lg my-8">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div
                                        className="border-solid rounded-full border-green-9 border-2 inline-block p-1  m-2 hover:cursor-default hover:bg-green-4 hover:fill-white"
                                        onClick={() => {
                                            count > 0 ? setCount(count - 1) : setCount(0);
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            width={20}
                                        >
                                            <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                                        </svg>
                                    </div>
                                </td>
                                <td>
                                    <input
                                        className="inline-block text-4xl border-solid  border-green-9 border-2 px-2 rounded-md w-24 text-center"
                                        value={count}
                                        onChange={(e) => {
                                            setCount(e.target.value);
                                        }}
                                    />
                                </td>
                                <td>
                                    <div
                                        className="border-solid rounded-full border-green-9 border-2 inline-block p-1 m-2 hover:cursor-default hover:bg-green-4 hover:fill-white"
                                        onClick={() => (stock > count ? setCount(count + 1) : null)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            width={20}
                                        >
                                            {/*Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
                                            <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
                                        </svg>
                                    </div>
                                </td>
                                <td className="text-4xl w-max" width={2}>
                                    <p className="ml-8 inline-block">{`Total : LKR ${total}`}</p>
                                </td>
                                <td className="px-8">
                                    <button className="text-white bg-green-7 border-solid border-2 px-5 py-2 rounded-lg hover:border-green-7 hover:text-green-7 hover:bg-white">
                                        Buy Now
                                    </button>
                                </td>
                                <td className="px-8">
                                    <button className="text-white bg-green-7 border-solid border-2 px-5 py-2 rounded-lg hover:border-green-7 hover:text-green-7 hover:bg-white">
                                        Add to cart
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
