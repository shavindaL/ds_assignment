import StarRating from "./starRating";

export default function ProductCard() {
  const productName = "Dhammika Syrup";
  const price = 12;
  const imgLink = "https://via.placeholder.com/300x300";
  const reviewCount = 231;
  return (
    <>
      <div className="px-1 py-10 rounded-2xl mobile-720:w-96 mobile-360:w-80 bg-white border-solid border-2">
        <table className="ml-auto mr-auto">
          <tbody>
            <tr>
              <td colSpan={3}>
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
                <button className="bg-green-6 px-4 py-2 rounded-md text-white">
                  Add to cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
