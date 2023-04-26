import {useState, useEffect} from "react";

export default function Customers() {
  // State variable to hold all sellers
  const [allCustomers, setAllCustomers] = useState([]);

  // Use the useEffect hook
  useEffect(() => {
    // Method to get all seller details
    async function getAllCustomers() {
      const res = await fetch("http://10.5.0.3:5000/v1/customer/customers/customerall");
      const allCustomers = await res.json();

      if (allCustomers) {
        // Set the value of allSellers state variable
        setAllCustomers(allCustomers);
      } else {
        console.log("No customers in the database collection");
      }
    }
    // Invoke the getAllSellers function
    getAllCustomers();
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
                  </tr>
                </thead>
                <tbody>
                  {allCustomers &&
                    allCustomers.map((customer) => {
                      return (
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap  px-6 py-4 font-medium">
                            {customer._id}
                          </td>
                          <td class="whitespace-nowrap  px-6 py-4">
                            {customer.firstname + " " + customer.lastname}{" "}
                          </td>
                          <td class="whitespace-nowrap  px-6 py-4">
                            0764532180
                          </td>
                          <td class="whitespace-nowrap  px-6 py-4">
                            {customer.email}
                          </td>
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
