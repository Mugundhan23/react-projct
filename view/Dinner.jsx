import React from "react";
import FoodLayout from "../view/view";
 
const Dinner = (props) => {
    return(
        <div>
            <h1 className="title">Dinner Page</h1>
            <FoodLayout data={props.jsondata}></FoodLayout>
        </div>
    )
}
export default Dinner