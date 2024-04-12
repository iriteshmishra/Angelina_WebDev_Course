//detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    });
}
//detecting keyboard press

document.addEventListener("keydown", function(event){

    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;    

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;    

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;  
            
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;    

        default: console.log(buttonInnerHTML);
            
    }
}

function buttonAnimation(currentKey){
    
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);


    }
/*
this.style.color = "red";
alert("Hello, My name is "+ bellboy.name)
*/


// document.querySelector("h1").classList.add("pressed");

/* 
Higher order functions means functions that able to take functions as inputs. 
e.g document.addEventListener("keydown", function(event)... In this addEventListener is higher order function.
*/


/*
JavaScript variables can also contain many values.
Objects are variables too. But objects can contain many values.
Object values are written as name : value pairs (name and value separated by a colon).
example:- let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
It is a common practice to declare objects with the const keyword.
*/


/*
var a = ["Jack", "Mike"];
var v = prompt("what is ur name?");
if (a.includes(v)){
    alert("welcome");
}else{
    alert("no result");
}
*/



/*
I run this in (chrome console - source)
var houseKeeper1 = [
    {name: "Raj"},
    {yearsOfExp:20},
    {age:18},
    {cleaningRoom: ["bathroom", "lobby", "bedroom"}
];

answer:- 
>houseKeeper1;
{name: 'Raj', yearsOfExp:20, age:18, cleaningRoom: Array(3)}
>console.log(houseKeeper1.name);
Raj
*/

/*
Map() method is used for creating a new array from an existing one,applying a function to each 
one of the elements of the first Array.

syntax: var new_array = arr.map(function callback(element,index,array){

})

ex:- 
const arr1 = [2,5,7,5,9,8,2];
const newArray = arr1.map((element)=>{
       return element*2;
})
console.log(newArray);


Filter Method:- filter out based on the conditions

const arr2 = [2,5,7,4,5,6,9,8,2];
const newArray = arr2.Filter((element)=>{
       return element%2===0;
})
console.log(newArray);


Reduce Method
const arr3 = [2,4,5,6];
const newValue = arr3.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(newValue);
output- 17. 

17 aaya kyuki 2+4 is 6 fir 6 +5 is 11 fir 11 + 6 is 17.




callback function are the function 

A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished

*/