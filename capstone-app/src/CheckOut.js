import React from "react";
import { Link } from "react-router-dom";


const CheckOut = () => {
    return (
        <>
        <h1>CheckOut</h1>
        <div>
            <form>
                <fieldset>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name-co" id="name-co" />
                    </div>
                    <div>
                        <h3>Credit Card Info</h3>
                        <label htmlFor="cc-num">Credit Card Number</label>
                        <input type="text" name="cc-num" id="cc-num" />
                    </div>
                    <div>
                        <label htmlFor="exp-date">Exp Date</label>
                        <input type="text" name="exp-date" id="exp-date" />
                    </div>
                    <div>
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" name="cvv" id="cvv" />
                    </div>
                    <div>
                        <Link to="/ConfOrder"><input aria-label="OnClick" type={"Submit"} value={"Confirm your order"}/> </Link>
                    </div>
                </fieldset>
            </form>
        </div>
        </>
    )
}

export default CheckOut;