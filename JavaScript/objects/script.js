// let todo={
//     title:"buy choclate",
    
//     done:true

// }

// console.log(todo);

// console.log['title'];
// console.log(todo.first);

// unordered data structures














// let to={
//     city:"delhi",
//     name:"satish",

//     // describe:function describe(){
//     //     console.log("hey this is method")
//     // }

//     // describe:function desc(){
//     //     console.log("hey this is method")
//     // }

//     describe:function(){
//         console.log("hey this is method")
//     }
// }


// console.log(to);
// console.log(to.describe());

// console.log(desc())

// // we cant use objects without using objects


// console.log(describe());








let person={
    naam:"satish kumar tivari",

    city:"delhi",

    describe:function(){
        console.log("my name is satish kumar tivari")
        console.log(`my name is ${person.naam}`)
        console.log(`my name is ${this.naam}`)
    }
}


console.log(person.describe());

let ans=person.describe();

console.log(ans);

// this keyword point to the object when it refered in the method

// when nothing is returned from the function then bydefault it returns uncdefined