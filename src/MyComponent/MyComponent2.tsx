import { useState } from "react";

function MyComponent2() {

    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event: any) {
        setName(event.target.value)
    }

    function handleQuantityChange(event: any) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event: any) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event: any) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event: any) {
        setShipping(event.target.value);
    }


    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange}
                placeholder="Add a comment" />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Blik">Blik</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pickup"
                    checked={shipping == "Pickup"}
                    onChange={handleShippingChange} />
                Pickup:
            </label> <br />

            <label>
                <input type="radio" value="Delivery"
                    checked={shipping == "Delivery"}
                    onChange={handleShippingChange} />
                Delivery:
            </label>

            <p>Shipping: {shipping}</p>
        </div>
    )
}
export default MyComponent2