import React from 'react'
import FoodLayout from '../view/view';

const BreakFast = (props) => {
    return (
        <div>
            <h1 className="title">BreakFast Page</h1>
            <FoodLayout data={props.jsondata}></FoodLayout>
        </div>
    )
}
export default BreakFast