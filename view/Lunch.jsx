import React from "react";
import FoodLayout from "../view/view";

const Lunch = (props) => {
    return(
        <div>
            <h1 className="title">Lunch Page</h1>
            <FoodLayout data={props.jsondata}></FoodLayout>
        </div>
    )
}
export default Lunch