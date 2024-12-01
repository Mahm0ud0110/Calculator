const display=document.getElementById("display")
 display.value = "0"
function appendToDisplay(input){
    if (display.value === "Error" || display.value === "0" || display.value === "undefined" || display.value === "Welcome To Code Spark") {
        display.value = "";
    }
    display.value += input;
}

function ClearDisplay(){
    display.value ="";
}

function calculate(){
    if (display.value === "Welcome To Code Spark" || display.value === "Error" || display.value === "") {
        display.value = "0";
    }
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
    
}
 function deleteLast(){
    display.value = display.value.slice(0,-1);
 }

 function calculatePercentage() {
    try {
        let value = parseFloat(display.value); 
        display.value = value / 100; 
    } catch (error) {
        display.value = "Error"; 
    }
}

function showWelcomeMassage(){
    display.value="Welcome To Code Spark";
}
