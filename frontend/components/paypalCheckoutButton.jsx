import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

export default function PaypalCheckOutButton({ cartOrder }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  async function sendMsgs(customerID) {
    const res = await fetch(`http://localhost:5000/v1/customer/${customerID}`);
    const customer = await res.json();

    if (customer) {
      //Send email
      try {
        await fetch("http://localhost:5000/v1/mail/newmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            {
              "email":customer.email,
              "subject" : "Order Confirmation",
              "body" : "<!DOCTYPE html><html><head><title>Thank You for Your Purchase!</title><style>body{font-family:Arial,sans-serif;color:#333}h1{color:#ff9900;font-size:28px;margin-top:20px}p{font-size:18px;line-height:1.5;margin-top:0}.button{display:inline-block;padding:10px 20px;background-color:#ff9900;color:#fff;font-size:18px;border-radius:5px;text-decoration:none;margin-top:20px}</style></head><body><h1>Thank You for Your Purchase!</h1><p>Dear Customer,</p><p>We wanted to take a moment to thank you for your recent purchase. We truly appreciate your business and hope that you are satisfied with your purchase.</p><a href='' class='button'>View Order Details</a><p>Thank you again for your purchase, and we hope to hear from you again soon!</p><p>Best regards,</p><p>AyuCare</p></body></html>"
          }
          ),

        });
      } catch (err) {
        console.log(err.message);
      }

      // Send sms
      try {
        await fetch("http://localhost:5000/v1/sms/sendSMS", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber: customer.phoneno,
            smsBody: "You order has been successfully placed",
          }),
        });
      } catch (err) {
        console.log(err.message);
      }
    }

    localStorage.removeItem('cart')
  }

  const handleApprove = async () => {
    // Call backend function to fulfill order
    console.log(cartOrder);
    await fetch("http://localhost:5000/v1/order/addOrder/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartOrder),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          console.log(response);
          // Send mail and sms
          sendMsgs(cartOrder.customerID);
        }
        // Handle successful response
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        // Handle error
      });

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
          layout: "vertical",
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
        createOrder={(data, actions) => {
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
            });
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
  );
}
