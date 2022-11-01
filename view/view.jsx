import React from "react";
// import { ConvertToFloat, UpperCase } from "../contorller/validation";
import { ConvertToFloat, UpperCase } from "../contorller/contorler";

const FoodLayout = (props) => {
    return (
        <div>
            {
                props.data.map(
                    (FoodData) => {
                        return (
                            <div id="bindingData" key={FoodData.id}>
                                <img src={process.env.PUBLIC_URL + FoodData.image} alt="productImage"></img>
                                <div className="productName">{UpperCase(FoodData.name)}</div>
                                <div className="productPrice">₹{ConvertToFloat(FoodData.price)}</div>
                                <button className="add-to-cart-btn">ADD</button>
                            </div>
                        )
                    }
                )
            }
        </div>
    );
};

export default FoodLayout