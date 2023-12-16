function square(n){
    return n * n;
} 
function cube(n){
    return n * n * n;
} 


function SumOfSomething(a, b, callback){
    const val1 = callback(a);
    const val2 = callback(b);

    return val1 + val2;
}

console.log(SumOfSomething(1,2,function (n){
    return n * n * n;

}
))
