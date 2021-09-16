let input = document.querySelector("#input");
let resultBox = document.querySelector("#resultBox");
let startButton = document.querySelector("#starter");
let RestartButton = document.querySelector("#reStarter");

RestartButton.addEventListener("click", restart)


startButton.addEventListener("click", separator)



let arrayElement= []
let saver=""

function separator(){
    let sentence = input.value;
    for(i = 0; i < sentence.length; i++){
if(sentence[i] !== " "){
    saver += sentence[i]
}
else if(saver.trim()){
    arrayElement.push(saver);
    saver="";
}
    } if(saver){
        arrayElement.push(saver);
    }

    console.log(arrayElement)
    resultBox.innerHTML += arrayElement
    input.value =""
}

function restart(){
    arrayElement =[]
    resultBox.innerHTML = arrayElement
}