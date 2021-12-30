import React from "react";
import { useForm, FormProvider } from "react-hook-form"
import { Elements, CardElement, ElementsConsumer, CardCvcElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from "./Review";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const PaymentForm = ({checkoutToken, shippingData, backStep, nextStep, onCaptureCheckout, timeout}) => {

    console.log(shippingData)
    const methods = useForm();

    const handleSubmit = async (e, elements, stripe) => {
        e.preventDefault();

        if(!stripe || !elements) return;
        
        const CardElement = elements.getElement(CardElement);

        const {error, paymentMethod } = await stripe.createPaymentMethos({ type: 'card', card: CardElement });

        if(error) {
            console.log(error)
        } else {
            const orderData = {
                list_items: checkoutToken.live.line_items,
                customer: {firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email},
                shipping: {
                    name: "Primary",
                    street: shippingData.address,
                    town_city: shippingData.city,
                    county_state: shippingData.shippingSibdivision,
                    postal_zip_code: shippingData.zip,
                    country: shippingData.shippingCountry
                },
                fulfillment: {shipping_method: shippingData.shippingOption},
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id
                    }
                }
            }

            onCaptureCheckout(checkoutToken.id, orderData)

            timeout()

            nextStep()
        }
    }

    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({elements, stripe}) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br /><br />
                            <div>
                                <button onClick={backStep}>Back</button>
                                <button disabled={!stripe}>Pay {checkoutToken.live.subtotal.formatted_with_symbol}</button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    );
}

export default PaymentForm;
