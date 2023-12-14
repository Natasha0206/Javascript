const dog = {
    name: "Dog",
    LegCount: "4",
    speaks: "Bhow Bhow"
}
const cat = {
    name: "Cat",
    LegCount: "4",
    speaks: "meow meow"
}

function printStr(animal){
    console.log("animal" + animal["name"] + " " + animal["speaks"]);
}

printStr(dog)
printStr(cat)