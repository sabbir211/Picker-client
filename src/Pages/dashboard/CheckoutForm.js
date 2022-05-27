import React, { useEffect, useState } from 'react';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import Loader from '../Shared/Loader/Loader';
const CheckoutForm = ({ totalAmount, userName ,id}) => {
    const stripe = useStripe();
    const [processing, setProcessing] = useState(false)
    const elements = useElements()
    const navigate = useNavigate()
    const [clientSecret, setClientSecret] = useState(false);
    // const { _id, totalAmount, name } = orderDetails;
    console.log(totalAmount, userName);
    useEffect(() => {

        fetch(`https://picker-pial.herokuapp.com/create-payment-intent`, {
            method: "post",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`

            }
            ,
            body: JSON.stringify({ totalAmount })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.clientSecret);
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret)

                }
            })

    }, [totalAmount])
//   if (processing) {
//         return <Loader></Loader>
//     }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true)
        if (!stripe || !elements) {

            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            swal("ERROR", error.message, "error")

        } else {
            console.log('[PaymentMethod]', paymentMethod);

        }
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,

                    },
                },
            },
        );
        if (intentError) {
            setProcessing(false)
            swal("ERROR", intentError.message, "error")
        }
        else {
            setProcessing(false)
            const confirmedOrder={transactionId:paymentIntent.id,toolsId:id}
            swal("SUCCESS", "Payment success", "success")
            fetch(`https://picker-pial.herokuapp.com/orderConfirmed/${id}`, {
                method: "put",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
                ,body:JSON.stringify(confirmedOrder)

            })
            .then(res=>res.json())
            .then(data=>console.log(data))
        }
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='btn btn-primary btn-sm my-4' disabled={!stripe || !clientSecret}>
                Confirm Payment
            </button>
        </form>
    );
};

export default CheckoutForm;