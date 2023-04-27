import { useEffect, useState } from "react";


export default function Table() {



  // State variable to hold all sellers
  const [allMyorders, setAllmyorders] = useState([]);

  // Use the useEffect hook
  useEffect(() => {

    const ids = window.location.pathname.split("/")[3]
    // Method to get all seller details
    async function getAllMyOrders() {
      const res = await fetch(`http://localhost:5000/v1/order/myorders/list/${ids}`);
      const allMyorders = await res.json();

      if (allMyorders) {
        // Set the value of allSellers state variable
        setAllmyorders(allMyorders);
      } else {
        console.log("No orders in the database collection");
      }
    }
    // Invoke the getAllSellers function
    getAllMyOrders();
  },[]);

  
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
                        Order Id
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Date purchased
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Status
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Total
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        {/* empty  */}
                      </th>
                    </tr>
                  </thead>
                  <tbody>


                  {allMyorders &&
                    allMyorders.map((user) => {
                      return (
                        <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap  px-6 py-4 font-medium">{user.orderID}</td>
                      <td class="whitespace-nowrap  px-6 py-4">{user.orderDate}</td>
                      <td class="whitespace-nowrap  px-6 py-4">{user.orderStatus}</td>
                      <td class="whitespace-nowrap  px-6 py-4">{user.total}</td>
                      <td class="whitespace-nowrap  px-6 py-4" style={{color:"#6469DE",fontWeight:"700"}}>Track Order</td>
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
  