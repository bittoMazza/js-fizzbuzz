
const boxContainer = document.getElementById('box-container');
let boxContent;
let classBg;
// Controllo prima se il numero è divisible per 3 e 5, poi solo per 3 e poi solo per 5, infine stampo l'indice nel caso non sia entrato in nessun if
for(let i=1;i <= 100;i++){
    if(i % 3 == 0 && i % 5 == 0){
        boxContent = "FizzBuzz"
        classBg = "fizz-buzz-box";
        console.log("FizzBuzz");
    }else if(i % 3 == 0){
        boxContent = "Fizz"
        classBg = "fizz-box"
        console.log("Fizz")
    }else if(i % 5 == 0){
        boxContent = "Buzz"
        classBg = "buzz-box"
        console.log("Buzz")
    }
    else{
        boxContent = i;
        console.log(i);
        classBg =  "classic-bg"
    }

    let singleBox = document.createElement('div');
    singleBox.innerHTML = boxContent;
    singleBox.classList.add('col-2','box',classBg);
    boxContainer.append(singleBox);

}