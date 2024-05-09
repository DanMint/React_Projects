import React, {useState} from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [amount, setAmount] = useState(0);
    const [review, setReview] = useState("")
    // drop down menue
    const  [payment, setPayment] = useState("NONE");
    // radio method
    const [shipping, setShipping] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleAmountChange (event) {
        setAmount(event.target.value);
    }

    function handleCommentChange(event) {
        setReview(event.target.value)
    }

    function handlePaymentChnage(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return(
        <>
            <div>
                <input value={name} onChange={handleNameChange} />
                <p>Name: {name}</p>

                <input value={amount} onChange={handleAmountChange} type="number" />
                <p>Amount: {amount}</p>

                <textarea value={review} onChange={handleCommentChange} placeholder="Please leave a review" />
                <p>Review: {review}</p>

                <select value={payment} onChange={handlePaymentChnage}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Gift Card">Gift Card</option>
                </select>
                <p>payment: {payment}</p>

                <label>
                    <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange}/> 
                    Pick up
                </label>

                <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div>
        </>
    );
}

export default MyComponent
