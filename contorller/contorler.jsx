import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BreakFast from '../view/BreakFast';
import Dinner from '../view/Dinner';
import Lunch from '../view/Lunch';
import Details from '../view/detials';
import Nav from '../view/nav';
import BreakFastJson from '../model/breakfast.json'
import DinnerDataJson from "../model/dinner.json";
import LunchData from "../model/lunch.json"
const Contorller = () => {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<BreakFast jsondata={BreakFastJson} />} />
                    <Route path='/dinner' element={<Dinner jsondata={DinnerDataJson} />} />
                    <Route path="/lunch" element={<Lunch jsondata={LunchData} />} />
                    <Route path='/details' element={<Details />} />
                </Routes>
            </Router>
        </div>
    );
}

const ConvertToFloat = (getItemPrice) => {
    var priceConvertion = parseFloat(getItemPrice).toFixed(2);
    return priceConvertion
}

const UpperCase = (getProductName) => {
    var upperCaseState = getProductName.toUpperCase();
    return upperCaseState
}

export {
    Contorller, ConvertToFloat, UpperCase
}