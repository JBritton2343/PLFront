import React, {useState} from "react"
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import Axios from "axios"


const Card_Options = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm(){

    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    }

    if(!error){
        try{
            const {id}=paymentMethod
            const response = await axios.post("http://localhost:3000/payment", {
                amount: 10000,
                id
            })
            if(response.data.success){
                console.log("Payment Accepted")
                setSuccess(true)
            }

        }catch(error){
            console.log("Payment Declined", error)

        }
        }else{
            console.log(error.message)
            
    }

    return(
        <>
        {!success ?
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className = "FormRow"></div>
                <CardElement options={Card_Options}/>
            </fieldset>
            <button>Pay</button>
        </form> 
        :
        <div>
            <h2>Your order is being shipped</h2>
        </div>
        }

        </>
    )
}