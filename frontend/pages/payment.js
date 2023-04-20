import React, { useState } from "react"
import "payhere-embed-sdk/dist/react.css"
import Payhere from "payhere-embed-sdk/dist/react"

const SubscriptionPage = () => {
  const [success, setSuccess] = useState(false)
  const [showPayhere, setShowPayhere] = useState(false)

  return (
    <div id="payhere-modal">
    <div>
      <div className="flex h-screen items-center justify-center">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={() => setShowPayhere(true)}
      >
        Continue to payment
      </button>
      </div>
      <Payhere

         amountInCents={1000}
         hideAmount={"no"}

        selector="#payhere-modal"
        embedURL={"https://app.payhere.co/iherb/iherb"}
        open={showPayhere}
        onSuccess={data => {
          console.log("Payhere success", data)
          setSuccess(true)
        }}
        onFailure={err => {
          console.log("Payhere failed", err)
          setSuccess(true)
        }}
        onClose={() => {
          setShowPayhere(false)
          if (success) {
            console.log("Payment success")
          } else {
            console.log("Payment failed")
          }
        }}
      />
    </div>
    </div>
  )
}

export default SubscriptionPage;