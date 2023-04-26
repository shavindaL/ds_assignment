import { useEffect, useState } from "react";

// Function to approve the order
async function approveOrder(orderID) {
  try {
    const res = await fetch(`http://localhost:5000/v1/order/${orderID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderStatus: "Approved",
      }),
    });
  } catch (err) {
    // Print error message
    console.log(err.message);
  }
}

// Function to reject the order
async function rejectOrder(orderID) {
  try {
    const res = await fetch(`http://localhost:5000/v1/order/${orderID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderStatus: "Rejected",
      }),
    });
  } catch (err) {
    // Print error message
    console.log(err.message);
  }
}

export default function OrderNotifications() {
  // Declare state variable to hold all pending orders
  const [pendingOrders, setPendingOrders] = useState([]);

  // useEffect hook used
  useEffect(() => {
    async function getAllOrders() {
      try {
        //Fetch all exisitng orders form the database collection
        const res = await fetch("http://localhost:5000/v1/order");
        const allOrders = await res.json();

        if (allOrders) {
          // Array to hold only pending orders
          let pendingOrders = allOrders.filter(
            (order) => order.orderStatus == "Pending"
          );

          // console.log("SDSDSD", typeof(pendingOrders[0].orderID.toString()))
          // Set the state variable
          setPendingOrders(pendingOrders);
        } else {
          console.log("No orders in the database collection");
        }
      } catch (err) {
        // Print error message
        console.log(err.message);
      }
    }

    // Invoke getAllOrders function
    getAllOrders();
  });

  // Function to get all details of a particular customer
  // async function getCustomerData(customerID){
  //   try{
  //     const res = await fetch("")
  //   } catch(err){
  //     // Print error message
  //     console.log(err.message);
  //   }
  // }

  return (
    <>
      <center className="ml-[200px]">
        <div
          className="flex justify-center border-b-[1px] border-[#ABC2E8] pb-[10px] pt-[10px] pl-[30px] pr-[30px]
                w-[655px] h-[52px]"
        >
          {/* <div className="=ml-[82px]" /> */}

          <button
          onClick={() => {
            for(let pendingOrder of pendingOrders){
              approveOrder(pendingOrder.orderID);
            }
          }}
            className="font-roboto font-[500] text-[20px] text-[#6590D5] ml-[22px] transition 
                      duration-150 ease-in-out hover:bg-[#C7D7F0] rounded pl-2 pr-2"
          >
            Approve All
          </button>
          <button
          onClick={() => {
            for(let pendingOrder of pendingOrders){
              rejectOrder(pendingOrder.orderID);
            }
          }}
            className="font-roboto font-[500] text-[20px] text-[#FF0000] ml-[92px]
          transition duration-150 ease-in-out hover:bg-[#F5CCD3] rounded pl-2 pr-2"
          >
            Reject All
          </button>
        </div>

        <div
          id={"accordianExample"}
          className="justify-center w-[655px] h-[72px] rounded-[5px] mt-[35px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        >
          {pendingOrders.length == 0 ? (
            <>
              <p>No Pending Orders</p>
            </>
          ) : (
            <>
              {pendingOrders &&
                pendingOrders.map((pendingOrder) => {
                  return (
                    <>
                      <div
                        className="rounded-[5px] bg-white"
                        key={pendingOrder._id}
                      >
                        <h2 className="mb-0" id="headingOne">
                          <button
                            className="group relative flex w-full items-center rounded-[5px] border-0
                                bg-[#3061AF] p-[15px] text-left text-base text-white transition
                                [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none
                                font-roboto font-[700] text-[14px]"
                            type="button"
                            data-te-collapse-init
                            data-te-target={"#collapse" + pendingOrder._id}
                            aria-expanded="true"
                            aria-controls={"collapse" + pendingOrder._id}
                          >
                            <div className="flex">
                              <p className="ml-[43px]">{pendingOrder.orderDate.toLocaleString().split("T")[0]}</p>
                              <p className="ml-[92px]">
                                Order ID :{pendingOrder.orderID}
                              </p>
                              <p className="ml-[100px]">
                                Net Total : LKR {pendingOrder.total}
                              </p>
                            </div>
                            <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div
                          id={"collapse" + pendingOrder._id}
                          className="!visible"
                          data-te-collapse-item
                          data-te-collapse-show
                          aria-labelledby="headingOne"
                          data-te-parent={"#acordianExample"}
                        >
                          {/* Start of description of the order */}

                          <div className="py-4 px-5 flex justify-center">
                            <div className="flex">
                              <p className="font-roboto font-[700] text-[14px]">
                                Customer ID&nbsp;:
                              </p>
                              <p className="font-roboto font-[400] text-[14px]">
                                &nbsp;{pendingOrder.customerID}
                              </p>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="flex">
                              <p className="font-roboto font-[700] text-[14px]">
                                Customer Name&nbsp;:
                              </p>
                              <p className="font-roboto font-[400] text-[14px]">
                                &nbsp;John Smith
                              </p>
                            </div>
                          </div>

                          <table class="min-w-full text-center text-sm font-light">
                            <thead class="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                              <tr>
                                <th scope="col" class=" px-6 py-4">
                                  Product ID
                                </th>
                                <th scope="col" class=" px-6 py-4">
                                  Product Name
                                </th>
                                <th scope="col" class=" px-6 py-4">
                                  Quantity
                                </th>
                                <th scope="col" class=" px-6 py-4">
                                  Unit Price (LKR)
                                </th>
                                <th scope="col" class=" px-6 py-4"></th>
                              </tr>
                            </thead>
                            <tbody>
                              {pendingOrder.data &&
                                pendingOrder.data.map((orderData) => {
                                  return (
                                    <tr class="border-b dark:border-neutral-500">
                                      <td class="whitespace-nowrap  px-6 py-4 font-medium">
                                        {orderData._id}
                                      </td>
                                      <td class="whitespace-nowrap  px-6 py-4">
                                        {orderData.name}
                                      </td>
                                      <td class="whitespace-nowrap  px-6 py-4">
                                        {orderData.quantity}
                                      </td>
                                      <td class="whitespace-nowrap  px-6 py-4">
                                        {orderData.price}
                                      </td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>

                          {/* Start of Approve/Reject buttons */}

                          <div class="flex justify-center pt-[40px] pb-[40px]">
                            <button
                              onClick={() => {
                                approveOrder(pendingOrder.orderID.toString());
                              }}
                              type="button"
                              data-te-ripple-init
                              data-te-ripple-color="light"
                              className="mb-2 flex rounded-[5px] px-6 py-2.5
                                            leading-normal font-roboto font-[700] text-[14px] text-white shadow-md transition duration-150
                                            ease-in-out hover:shadow-lg focus:outline-none
                                            focus:ring-0 bg-[#6590D5]"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-[20px] h-[20px]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              &nbsp;&nbsp;APPROVE
                            </button>

                            <div className="w-[40px]" />

                            <button
                              onClick={() => {
                                rejectOrder(pendingOrder.orderID.toString());
                              }}
                              type="button"
                              data-te-ripple-init
                              data-te-ripple-color="light"
                              className="mb-2 flex rounded-[5px] px-6 py-2.5
                                            leading-normal font-roboto font-[700] text-[14px] text-white shadow-md transition duration-150
                                            ease-in-out hover:shadow-lg
                                            focus:ring-0 bg-[#FF0000]"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-[20px] h-[20px]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              &nbsp;&nbsp;REJECT
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* End of Approve/Reject buttons */}

                      <br />
                    </>
                  );
                })}
            </>
          )}
        </div>
      </center>
    </>
  );
}
