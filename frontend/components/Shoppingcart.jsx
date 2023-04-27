import React, { useEffect, useState } from "react";
import uniqid from 'uniqid';
import { useAuthContext } from "@/hooks/userAuthContext";
import PaypalCheckOutButton from "./paypalCheckoutButton";

function Shopcart() {
  const { user } = useAuthContext();

  const [cartItems, setCartItems] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [data, setData] = useState([]);
  let grandTotal = 0;

  let cs;


  useEffect(() => {
    //* check cache for cart object
    cs = localStorage.getItem("cart");

    if (!cs) {
      return;
    }
    const cart = JSON.parse(cs);
    if (cart.products.length !== 0) {
      setData(cart.products.map(cartItem => {

        return {


          name: cartItem.name,

          price: cartItem.price,

          quantity: cartItem.qty,

        }

      }))
      setCartItems(cart.products);
      setIsEmpty(false)
    }
  }, []);

  //* remove a item from cart
  const removeItem = (productId) => {
    const result = cartItems.filter((cartItem) => {
      return cartItem.id !== productId;
    });

    localStorage.removeItem("cart");

    if (result.length !== 0) {
      localStorage.setItem("cart", JSON.stringify({ id: 1, products: result }));
      setCartItems(result);
    }
    else
      setIsEmpty(true);

  };

  
  //* increment quantity
  const incrementQuantity = (productId) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === productId) {
        return { ...cartItem, qty: cartItem.qty + 1 };
      } else {
        return cartItem;
      }
    });

    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify({ id: 1, products: updatedItems }));
    setCartItems(updatedItems);
  };

  //* decrement quantity
  const decrementQuantity = (productId) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === productId) {
        return { ...cartItem, qty: cartItem.qty - 1 };
      } else {
        return cartItem;
      }
    });

    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify({ id: 1, products: updatedItems }));
    setCartItems(updatedItems);
  };
  
  return (
    <>
      <div class="flex flex-col w-80vw mx-auto">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              {!isEmpty ?
                <table class="min-w-full text-center text-lg font-light font-roboto">
                  <thead class="border-b bg-green-6 text-white h-20">
                    <tr>
                      <th scope="col" class=" px-6 py-4"></th>
                      <th scope="col" class=" px-6 py-4">
                        Product
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Quantity
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Remove
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Price
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-roboto text-2xl font-500">
                    {cartItems &&
                      cartItems.map((cartItem) => {
                        grandTotal += cartItem.price * cartItem.qty
                        const increment = () => {
                          const updatedCartItems = [...cartItems];
                          const index = updatedCartItems.findIndex(
                            (item) => item.id === cartItem.id
                          );
                          updatedCartItems[index] = {
                            ...updatedCartItems[index],
                            qty: updatedCartItems[index].qty + 1,
                          };
                          setCartItems(updatedCartItems);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify({ id: 1, products: updatedCartItems })
                          );
                        };
  
                        const decrement = () => {
                          const updatedCartItems = [...cartItems];
                          const index = updatedCartItems.findIndex(
                            (item) => item.id === cartItem.id
                          );
                          if (updatedCartItems[index].qty === 1) {
                            return;
                          }
                          updatedCartItems[index] = {
                            ...updatedCartItems[index],
                            qty: updatedCartItems[index].qty - 1,
                          };
                          setCartItems(updatedCartItems);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify({ id: 1, products: updatedCartItems })
                          );
                        };
                        return (
                          <tr
                            class="border-b dark:border-neutral-500"
                            key={cartItem.id}
                          >
                            <td class="whitespace-nowrap  px-6 py-4 font-medium">
                              <img
                                className="rounded-md"
                                src={cartItem.imgLink}
                                width={100}
                                height={100}
                              />
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4 font-medium">
                              {cartItem.name}
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4 ">
                              <button
                                onClick={decrement}
                                className="bg-green-600 text-white rounded-lg px-2 py-1 mx-2"
                              >
                                -
                              </button>
                              {cartItem.qty}
                              <button
                                onClick={increment}
                                className="bg-green-600 text-white rounded-lg px-2 py-1 mx-2"
                              >
                                +
                              </button>
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4">
                              <button onClick={() => removeItem(cartItem.id)}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  fill="#F00"
                                  viewBox="0 0 448 512"
                                >
                                  <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                                </svg>
                              </button>
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4">
                              {cartItem.price}
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4">
                              {cartItem.price * cartItem.qty}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                  <tfoot>
                    <tr className="h-16 text-2xl font-500">
                      <td colSpan={5}>
                        Grand Total
                      </td>
                      <td className="text-3xl font-500">
                        {grandTotal}
                      </td>
                    </tr>
                    <tr className="h-16">
                      <td colSpan={5}></td>
                      <td >
                        
                        <PaypalCheckOutButton cartOrder={{ orderID: uniqid(), customerID: user._id, data, total: grandTotal }} />
                        
                      </td>
                    </tr>
                  </tfoot>
                </table>
                :
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-gray-400 text-center py-6">
                    <img className="mx-auto" src="empty_cart.png" width={480} />
                    <div className="mt-6">Your cart is empty.</div>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopcart;
