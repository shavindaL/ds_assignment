import { useEffect, useState } from "react";

export default function Sellers() {
  // State variable to hold all sellers
  const [allSellers, setAllSellers] = useState([]);

  // Use the useEffect hook
  useEffect(() => {
    // Method to get all seller details
    async function getAllSellers() {
      const res = await fetch("http://10.5.0.3:5000/v1/seller/sellers");
      const allSellers = await res.json();

      if (allSellers) {
        // Set the value of allSellers state variable
        setAllSellers(allSellers);
      } else {
        console.log("No sellers in the database collection");
      }
    }
    // Invoke the getAllSellers function
    getAllSellers();
  });

  return (
    <>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center text-sm font-light">
                <thead class="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                  <tr>
                    <th scope="col" class=" px-6 py-4">
                      ID
                    </th>
                    <th scope="col" class=" px-6 py-4">
                      Name
                    </th>
                    <th scope="col" class=" px-6 py-4">
                      Phone Number
                    </th>
                    <th scope="col" class=" px-6 py-4">
                      Email
                    </th>
                    <th scope="col" class=" px-6 py-4">
                      Shop Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allSellers &&
                    allSellers.map((seller) => {
                      return (
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap  px-6 py-4 font-medium">
                            {seller.sellerID}
                          </td>
                          <td class="whitespace-nowrap  px-6 py-4">
                            {seller.firstName + " " + seller.lastName}{" "}
                          </td>
                          <td class="whitespace-nowrap  px-6 py-4">
                            {seller.phoneNumber}
                          </td>
                          <td class="whitespace-nowrap  px-6 py-4">
                            {seller.email}
                          </td>
                          <td>{seller.shopName}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
