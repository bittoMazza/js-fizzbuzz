
const boxContainer = document.getElementById('box-container');
let boxContent;
// Controllo prima se il numero è divisible per 3 e 5, poi solo per 3 e poi solo per 5, infine stampo l'indice nel caso non sia entrato in nessun if
for(let i=1;i <= 100;i++){
    if(i % 3 == 0 && i % 5 == 0){
        boxContent = "FizzBuzz"
        console.log("FizzBuzz");
    }else if(i % 3 == 0){
        boxContent = "Fizz"
        console.log("Fizz")
    }else if(i % 5 == 0){
        boxContent = "Buzz"
        console.log("Buzz")
    }
    else{
        boxContent = i;
        console.log(i);
    }

    let singleBox = document.createElement('div');
    singleBox.innerHTML = boxContent;
    singleBox.classList.add('col-2','box');
    boxContainer.append(singleBox);

}