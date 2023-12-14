function sum(num1, num2, fnToCall){
    let result = num1+num2;
    fnToCall (result);
}

function displayResult(data){
    console.log("Result of the sum:" + data);
}

function displayResultPassive(data){
    console.log("Sum's result is:" + data);

}
const ans = sum(1,2, displayResult);