const sticksList = document.querySelectorAll("#sticks .stick .head");
const numberList = document.querySelectorAll("#sticks .stick .number");

const input = document.querySelector("#inputNumber");
const button = document.querySelector("#inputButton");

let number = 0;
const S = sticksList.length-1;
button.addEventListener("click",getNumber);

const header = document.querySelector(".text");
header.addEventListener("click",reload);


function getNumber(){
    number = input.value;
    number = number*1;
    if(tryNumber(number)){
        getColor(number);
    }
    else{
        input.value = "ERROR";
        clearAll();
    }

}

function clearAll(){
    for(let stick of sticksList){
        stick.classList.remove("green");
    }
    for(let v of numberList){
        v.innerHTML = 0;
    }
}

function tryNumber(number){
    if((number >= 0)&&(number < 2048)){
        return true;
    }
    else{
        return false;
    }

}

function getColor(number){
    let bin = number.toString(2);
    let binArr = [];
    for(i =bin.length-1; i >=0;i--){
        binArr.push(bin.charAt(i));
    }

    for(i = 0; i<bin.length; i++){
        if(binArr[i] == "1"){
            sticksList[S-i].classList.add("green");
            numberList[S-i].innerHTML = 1;
        }
        else{
            sticksList[S-i].classList.remove("green");
            numberList[S-i].innerHTML = 0;
        }
    }
}
