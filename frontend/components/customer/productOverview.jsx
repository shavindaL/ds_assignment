import { useEffect, useState } from "react";
import StarRating from "./starRating";

export default function ProductOverview({ productData }) {
    const imgLinks = productData["imageUrls"];
    const productName = productData["product"].productName;
    const reviewCount = 69;
    const price = productData["product"].unitPrice;
    const stock = productData["product"].unitsInStock;
    const productDescription = productData["product"].productDescription;
    const packageWeight = productData["product"].productWeight;
    const packageQuantity = productData["product"].packageQuantity;
    const brand = productData["product"].brand;
    const seller = productData["product"].sellerId;
    const category = productData["product"].productCategory;

    const [mainImg, setMainImg] = useState(imgLinks[0]);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
    const [showMsg, setShowMsg] = useState(false);
    const [showAlertMsg, setShowAlertMsg] = useState(false);

    useEffect(() => setTotal(price * count), [count]);

    const addToCart = () => {
        if (count !== 0) {
            const cs = localStorage.getItem('cart');
            let cart;

            let isAdded = false;

            if (!cs) {
                cart = {
                    cid: 1,
                    products: [{
                        id: productData['product'].productId,
                        name: productName,
                        price: productData['product'].unitPrice,
                        qty: count,
                        imgLink: productData['imageUrls'][0]
                    }]
                }
            }
            else {
                cart = JSON.parse(cs)
                cart.products = cart.products.map(ci => {
                    if (ci.id == productData['product'].productId) {
                        isAdded = true
                        return {
                            id: ci.id,
                            name: ci.name,
                            price: ci.price,
                            qty: ci.qty + count,
                            imgLink: ci.imgLink

                        }
                    }
                    return {
                        id: ci.id,
                        name: ci.name,
                        price: ci.price,
                        qty: ci.qty,
                        imgLink: ci.imgLink

                    }
                }
                )

                if (!isAdded) {
                    cart.products.push({
                        id: productData['product'].productId,
                        name: productName,
                        price: productData['product'].unitPrice,
                        qty: count,
                        imgLink: productData['imageUrls'][0]

                    })
                }
            }

            localStorage.setItem('cart', JSON.stringify(cart))
            setShowMsg(true)
            setTimeout(() => setShowMsg(false), 800)
        }
        else {
            setShowAlertMsg(true)
            setTimeout(() => setShowAlertMsg(false), 800)
        }
    }


    return (
        <div className="bg-white p-16 grid grid-cols-3 gap-4">
            <div className="h-[480px]">
                <div className="w-[480px] h-[480px] border-green-9 border-solid border-2 bg-white rounded-lg relative mx-auto">
                    <img
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"
                        src={mainImg}
                    />
                </div>
                <div className="py-2 mt-4 mx-4 border-green-9 border-solid border-2 bg-white rounded-lg">
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
                <div className="w-210 h-[480px] border-green-9 border-solid border-2 rounded-lg relative p-8">
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

                    <p className="px-12">
                        {productDescription}
                    </p>
                    <div className="mt-4 ml-11">
                        <table className="text-lg font-600">
                            <tr>
                                <td><p className="text-lg font-600">Category</p></td>
                                <td>:</td>
                                <td>{category}</td>
                            </tr>
                            <tr>
                                <td><p>Brand&nbsp;&nbsp;</p></td>
                                <td>:&nbsp;&nbsp;</td>
                                <td> {brand}</td>
                            </tr>
                            <tr>
                                <td><p className="text-lg font-600">Seller</p></td>
                                <td>:</td>
                                <td>{seller}</td>
                            </tr>
                            <tr>
                                <td><p>Package Weight </p></td>
                                <td>:&nbsp;&nbsp;</td>
                                <td>{packageWeight} g</td>
                            </tr>
                            <tr>
                                <td><p>Package Quantity&nbsp;&nbsp;</p></td>
                                <td>:&nbsp;&nbsp;</td>
                                <td> {packageQuantity}</td>
                            </tr>
                        </table>
                    </div>

                </div>
                {/* Product Details Section ends here*/}

                {/* Product Count and total */}
                <div className="w-210 h-24 border-green-9 border-solid border-2 rounded-lg my-8">
                    <table className="mt-4 mx-auto" >
                        <tbody>
                            <tr>
                                <td>
                                    <div
                                        className="border-solid rounded-full border-green-9 border-2 inline-block p-1  m-2 hover:cursor-default hover:bg-green-4 hover:fill-white"
                                        onClick={() => {
                                            count > 0 ? setCount(Number(count - 1)) : setCount(0);
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
                                        type="number"
                                    />
                                </td>
                                <td>
                                    <div
                                        className="border-solid rounded-full border-green-9 border-2 inline-block p-1 m-2 hover:cursor-default hover:bg-green-4 hover:fill-white"
                                        onClick={() => (stock > count ? setCount(Number(count + 1)) : null)}
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
                                    <button className="text-white bg-green-7 border-solid border-2 px-5 py-2 rounded-lg hover:border-green-7 hover:text-green-7 hover:bg-white" onClick={addToCart}>
                                        Add to cart
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {
                    showMsg ?
                        <div
                            className="mb-3 inline-flex w-full items-center rounded-lg bg-success-100 px-6 py-5 text-base text-success-700 mt-5"
                            role="alert">
                            <span className="mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                        clipRule="evenodd" />
                                </svg>
                            </span>
                            Product Added Cart
                        </div> : null
                }
                {
                    showAlertMsg ?
                        <div
                            className="mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
                            role="alert">
                            <span className="mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                        clipRule="evenodd" />
                                </svg>
                            </span>
                            Please enter valid quantity.
                        </div> : null
                }

            </div>
        </div>
    );
}
