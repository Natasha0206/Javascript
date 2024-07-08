function sum(sum1, sum2, fnToCall){
    let result = sum1 + sum2;
    fnToCall(result);
}
function displayResult(data){
    console.log("Result of the sum is :"+ data);
}

function displayResultPassive(data){
    console.log("Sum's result is:" + data);
}

const ans = sum(1,2,displayResultPassive );

