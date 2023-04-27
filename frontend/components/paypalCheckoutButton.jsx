import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

export default function PaypalCheckOutButton ({cartOrder}) {

    
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

async function updateProductQty (productId, orderedQuantity){
  try {
    const res = await fetch('http://localhost:5000/v1/inventory/products/qty/'+ productId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({orderedQuantity})
    })


  } catch (error) {
    
  }
}
    
    const handleApprove = async() => {
      // Call backend function to fulfill order
      console.log(cartOrder);
      await fetch('http://localhost:5000/v1/order/addOrder/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartOrder)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        else{
            console.log(response);
        }
        // Handle successful response
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        // Handle error
      });
      for(let product of cartOrder.data){
        updateProductQty(product._id, product.quantity)
      }
      // if response is success
      setPaidFor(true);
      // Refresh user's account or subscription status
  
      // if response is error
      // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
    };
  
    // if (paidFor) {
    //   // Display success message, modal or redirect user to success page
    // //   alert("Thank you for your purchase!");
    // }

    
    if (error) {
        // Display error message, modal or redirect user to error page
        alert(error);
    }
  
  

    return (
        <>
            <PayPalButtons
                style={{
                    color: "silver",
                    layout: "vertical"
                }}
                onClick={(data, actions) => {
                    // Validate on button click, client or server side
                    const hasAlreadyBoughtCourse = false;
                  
                    if (hasAlreadyBoughtCourse) {
                      setError(
                        "You already bought this course. Go to your account to view your list of courses."
                      );
                  
                      return actions.reject();
                    } else {
                      return actions.resolve();
                    }
                  }}
                createOrder={
                    (data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: "JPY",
                                            value: cartOrder.total,
                                            
                                        },
                                        // items: 
                                        //   {
                                        //     quantity: cartOrder.customerId,
                                            
                                        //   }
                                        
                                       
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            })
                    }}
                onApprove={function (data, actions) {
                    handleApprove();
                }}
                onCancel={() => {
                    // Display cancel message, modal or redirect user to cancel page or back to cart
                  }}
                  onError={(err) => {
                    setError(err);
                    console.error("PayPal Checkout onError", err);
                  }}
            />
        </>
    )
}