class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount; // A class has Function  and Attributes
        this.speaks = speaks;  // This is a BluePrint
    }
speak(){
    console.log("Hi There " + this.speaks);
    }
}

let dog = new Animal("dog", 4, "bow bow");
let cat = new Animal("cat", 4, "meow meow"); //Objects creation
dog.speak();
cat.speak(); // call Function on a object 


    