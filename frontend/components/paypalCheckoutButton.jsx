import { PayPalButtons } from "@paypal/react-paypal-js";

export default function PaypalCheckOutButton() {

    return (
        <>
            <PayPalButtons
                style={{
                    color: "silver",
                    layout: "vertical"
                }}
                createOrder={
                    (data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: "USD",
                                            value: "200",
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            })
                    }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
            />
        </>
    )
}