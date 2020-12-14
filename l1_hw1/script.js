var button = document.querySelector("button");
var p = document.querySelector("p");
var arr = ["So many books, so little time.", "Be the change that you wish to see in the world.", "If you tell the truth, you don't have to remember anything.", "A friend is someone who knows all about you and still loves you.", "Without music, life would be a mistake."];
var size = arr.length;
    randomNum = " ";
    elementOfArray = " ";
    

function randomQuote(){
    randomNum = Math.floor(Math.random() * size);
    
    console.log(randomNum);// 1
    console.log(arr[randomNum]);// guote[1]

    elementOfArray = arr[randomNum];// guote[1]
    p.innerText = elementOfArray;
}
randomQuote();


button.addEventListener("click", randomQuote);



    



