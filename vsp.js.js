let input = document.querySelector("input")
let buttons = document.querySelectorAll("button")
let equal = document.getElementById("equal")
let zero = document.getElementById("zero")
let del = document.getElementById("del")

buttons.forEach(button => {
    button.onclick = function () {
        input.value += button.textContent;
    }
})

function sideoperators() {
   equal.onclick = function(){
    input.value = eval(input.value)
   } 
   del.onclick = function(){
    input.value = input.value.slice(0,-1);

   }
   zero.onclick = function(){
    input.value = "";
    
   }
}

sideoperators()
