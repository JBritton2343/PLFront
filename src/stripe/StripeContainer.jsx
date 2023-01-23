import React from "react";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";

const PUBLIC_KEY = "pk_test_51M4qpIAVWcSwnP4KZpjsfwbMWdkMl1BMEt3Kw7yebv2rgS8BcTLXAA7NACHsm7fzFE8BJLY1LrCLMqipDljamWet00gqCYCIfk"
const stripeTestPromise = loadStripe(PUBLIC_KEY)
export default function StripeContainer(){
    return(
        <Elements stripe = {stripeTestPromise}>

            <PaymentForm />


        </Elements>
    )
}

 