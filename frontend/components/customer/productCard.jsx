import Link from "next/link";
import StarRating from "./starRating";

export default function ProductCard({ productData }) {
  const productName = productData['product'].productName;
  const price = productData['product'].unitPrice;
  const imgLink = productData['imageUrls'][0];
  const reviewCount = 231;


  const addToCart = () => {
    const cs = localStorage.getItem('cart')
    let cart;

    let isAdded = false;

    if (!cs) {
      cart = {
        cid: 1,
        products: [{
          id: productData['product'].productId,
          name: productName,
          description: productData['product'].productDescription,
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
            description: ci.description,
            price: ci.price,
            qty: ci.qty + 1,
            imgLink: ci.imgLink

          }
        }
        return {
          id: ci.id,
          name: ci.name,
          description: ci.description,
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
          description: productData['product'].productDescription,
          price: productData['product'].unitPrice,
          qty: 1,
          imgLink: productData['imageUrls'][0]

        })
      }
    }

    localStorage.setItem('cart', JSON.stringify(cart))
  }

  return (
    <>
      <div className="px-1 py-10 rounded-2xl mobile-720:w-96 mobile-360:w-80 bg-white border-solid border-2 border-green-4">
        <table className="">
          <tbody>
            <tr>
              <td colSpan={4}>
                <img src={imgLink} className="ml-auto mr-auto rounded-md" />
              </td>
            </tr>
            <tr className="pt-3">
              <td colSpan={3}>
                <p>{productName}</p>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <p>{`$${price}`}</p>
              </td>
            </tr>
            <tr>
              <td className="pr-4">
                <StarRating />
              </td>
              <td className="pr-4">
                <p className="inline">{`(${reviewCount})`}</p>
              </td>
              <td className="pr-4">
                <Link href={{ pathname: `../cart` }} >
                  <button className="bg-green-6 px-4 py-2 rounded-md text-white text-sm" onClick={addToCart}>
                    Add to cart
                  </button>
                </Link>
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
          </tbody>
        </table>
      </div>
    </>
  );
}
