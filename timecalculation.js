function calculatesum (n) {
    let a = 0;
    for (let i = 0; i<n; i++){
        a = a+i
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculatesum(1000000);

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();
console.log(afterTimeInMs - beforeTimeInMs)

