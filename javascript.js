let calculation = [];
let response = 0;
let output;
setTimeout(()=>{output = document.getElementById("output");},10)

function add(num1,num2){
    return num1+num2;
}

function substract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}


function operate(operator,num1, num2){
    switch(operator){
        case("+"):
        return add(num1, num2);
        case("-"):
        return substract(num1, num2);
        case("*"):
        return multiply(num1, num2);
        case("/"):
        return divide(num1, num2);
        default:
        return "Wrong operator";
    }
}

function addKey(key){
    calculation.push(key);
    output.textContent = calculation.join(" ");
}

function back(){
    calculation.pop();
    output.textContent = calculation.join(" ");
}

function clearOutput(){
    calculation = [];
    response = 0;
    output.textContent = '';
}

function equal(){
    const indexOperator = calculation.findIndex((i)=>i == '+' || i == '-' || i == '*' || i == '/')
    const firstNumber = parseFloat(calculation.slice(0,indexOperator).join(""))
    const operator = calculation[indexOperator];
    const secondNumber =  parseFloat(calculation.slice(indexOperator+1).join(""))
    if(operator == '/' && secondNumber == 0){
        output.textContent = "You are wizard, Harry!";
    } else{
        response = operate(operator, firstNumber, secondNumber);
        output.textContent = response;
    }
   
}