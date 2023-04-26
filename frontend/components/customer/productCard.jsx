import Link from "next/link";
import StarRating from "./starRating";
import { useState } from "react";

export default function ProductCard({ productData }) {
  const productName = productData['product'].productName;
  const price = productData['product'].unitPrice;
  const imgLink = productData['imageUrls'][0];
  const reviewCount = 231;

  const [showMsg, setShowMsg] = useState(false)


  const addToCart = () => {
    //* Get cart object from local cache
    const cs = localStorage.getItem('cart')
    let cart;

    let isAdded = false;

    if (!cs) {
      cart = {
        cid: 1,
        products: [{
          id: productData['product'].productId,
          name: productName,
          price: productData['product'].unitPrice,
          qty: 1,
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
            qty: ci.qty + 1,
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
          qty: 1,
          imgLink: productData['imageUrls'][0]

        })
      }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setShowMsg(true)
    setTimeout(() => setShowMsg(false), 800)


  }

  return (
    <>
      <div className="px-0 pb-10 rounded-2xl mobile-720:w-[400px] mobile-360:w-80 bg-white border-solid border-2 border-green-4">
        <table className="">
          <tbody>
            <tr>
              <td colSpan={4}>
                <img src={imgLink} className="ml-auto mr-auto rounded-t-2xl" />
              </td>
            </tr>
            <tr className="pt-3">
              <td colSpan={3}>
                <p className="pl-4">{productName}</p>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <p className="pl-4">{`$${price}`}</p>
              </td>
            </tr>
            <tr>
              <td className="pr-4">
                <div className="pl-4">
                  <StarRating />
                </div>
              </td>
              <td className="pr-4">
                <p className="inline">{`(${reviewCount})`}</p>
              </td>
              <td className="pr-4">
                <button className="bg-green-6 px-4 py-2 rounded-md text-white text-sm h-12 w-20" onClick={addToCart}>
                  <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={20} fill="#FFF">
                    {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </button>
              </td>
              <td className="pr-4">
                <Link href={{ pathname: `../products/${productData['product'].productId}` }} >
                  <button className="bg-green-6 px-4 py-2 rounded-md text-white h-12 w-20">
                    <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={20} fill="#FFF">
                      {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                  </button>
                </Link>
              </td>
            </tr>
            {
              showMsg ?
                <tr>
                  <td colSpan={4}>

                    <div
                      className="mb-3 inline-flex w-full items-center rounded-lg bg-success-100 px-6 py-5 text-base text-success-700 mt-5"
                      role="alert">
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="h-5 w-5">
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clipRule="evenodd" />
                        </svg>
                      </span>
                      Product Added Cart
                    </div>
                  </td>
                </tr> : null
            }

          </tbody>
        </table>
      </div>
    </>
  );
}
