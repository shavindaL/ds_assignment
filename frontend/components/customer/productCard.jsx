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
              <td className="pr-4" >
                <button className="bg-green-6 px-4 py-2 rounded-md text-white text-sm" onClick={addToCart}>
                  Add to cart
                </button>
              </td>
              <td className="pr-4">
                <Link href={{ pathname: `../products/${productData['product'].productId}` }} >
                  <button className="bg-green-4 px-4 py-2 rounded-md text-white">
                    View
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
