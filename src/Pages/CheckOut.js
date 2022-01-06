import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { commerce } from "../Commerce/Commerce";
import AddressForm from "../Components/AddressForm"
import PaymentForm from "../Components/PaymentForm";


const steps = ['Shipping Details', 'Payment Details']

const CheckOut = ({ cart, setCart, order, onCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})
  const [isFinished, setIsFinished] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type : 'cart' })

        setCheckoutToken(token)
      } catch (error){
        navigate('/')
      }
    }

    generateToken()
  }, [cart])

  const nextStep = () => {setActiveStep((prevActiveStep) => prevActiveStep + 1)}
  const backStep = () => {setActiveStep((prevActiveStep) => prevActiveStep - 1);setCart(cart)}

  const next = (e, data) => {
    setShippingData(data)
    console.log(data)
    nextStep();
  }

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true)
    }, 3000);
  }
  const Confirmation = () => order.customer ? (
    <div>
      Confirmation
    </div>
  ) : isFinished ? (
    <div>
      <h1>Thank You For Your Purchase</h1>
    </div>
  ) : (
    <h2>Loading...</h2>
  )

  const Form = () => activeStep === 0
  ? <AddressForm checkoutToken={checkoutToken} next={next} /> :
    <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} timeout={timeout} />

  return(
    <div className="checkout">
      {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
    </div>
  )
}
    
  export default CheckOut;