const allUsers = [{
    firstname: "Keshav",
    gender: "Male"
},{
    firstname: "Natasha",
    gender: "Female"
},{
    firstname: "Vansh",
    gender: "Male",
    metadata: {
        age: 21,
        address: "Pune"
    }
}
]

for (let i = 0 ; i<allUsers.length; i++)
if (allUsers[i] ["gender"]== 'Male'){
    console.log(allUsers[i]["firstname"])
}