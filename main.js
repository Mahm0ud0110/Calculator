const display=document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function ClearDisplay(){
    display.value ="";
}

function calculate(){
    
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