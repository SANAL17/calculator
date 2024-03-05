
// display a number on field 
function displayNumber(num){
    result.value+=num   
}

// clear all data
function Cleardata() {
    result.value=""
    
}
// evaluate the exprssion 

function evaluateExpression() {
    result.value=eval(result.value)
    
}

// clear last char

function removelastCharector() {
    result.value = result.value.slice(0,-1)
    
}