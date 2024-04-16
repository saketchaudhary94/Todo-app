// let btns = document.querySelectorAll('button');

// for(btn of btns){

//     btn.addEventListener("click" , function (){
//         alert("Hii sir ");
//     });
//     btn.addEventListener("click", function (){
//         alert("Hello sir ");
//     });
//     // btn.onclick = function (){
//     //     alert(" I am first :");
//     // }
//     // btn.onclick = function (){
//     //     alert("I am second :");
//     // }
//     // btn.onmouseenter = function (){
//     //     alert("Your cursor is on the button :");
//     // }
// }
// let inp = document.querySelector("input");

// inp.addEventListener("keydown" , function(event){
//     if(event.code == "ArrowUp"){
//         console.log("Character moves forward :");
//     }
//     else if(event.code == "ArrowDown"){
//         console.log("Character moves backward :");
//     }
//     else if(event.code == "ArrowLeft"){
//         console.log("Character moves left :");
//     }
//     else if(event.code == "ArrowRight"){
//         console.log("Character moves right :");
//     }

//     console.log("code = ",event.code);
//     console.log("Key = ",event.key);
// });

// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     btn.classList.add("green");
//     console.log("Button clicked :");
// });

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
let inp = document.querySelector("input");

btn.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Task deleted :");
        
    }
});