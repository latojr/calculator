const display = document.getElementById("display");

//input value into display
function inputValue(value){
    document.getElementById("display").value += value;
}

//calculate result using eval function which calculates whats in the display
function calculateResult(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}


//clear display
function clearDisplay(){
     document.getElementById("display").value = "";
}

//delete last number
function deleteLast(){
    let currentDisplay = display.value;
    display.value = currentDisplay.substring(0, currentDisplay.length - 1);
}