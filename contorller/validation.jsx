 const ConvertToFloat = (value)=>{
    if(value){
        var priceConvertion = parseFloat(value).toFixed(2);
    }
    return priceConvertion
}

 const UpperCase = (values) => {
    if(values){
        var upperCaseState =  values.toUpperCase();
    }
    return upperCaseState
}
export{
    ConvertToFloat, UpperCase
}
