
let displayer= document.querySelector("#displayer")
let textArea = document.querySelector("#textAreaMain")
let button = document.querySelector("#button")
button.addEventListener("click",stringSeparator)
let starter = document.querySelector("#Start")
starter.addEventListener("click", start)


let array = []

function stringSeparator(){
    array = []
 
let data = textArea.value
for(let i = 0; i < data.length; i++){
    array.push(data[i])

    displayer.innerHTML = array
  
}
}

function start(){
    textArea.value = ""
    displayer.innerHTML =""
}
