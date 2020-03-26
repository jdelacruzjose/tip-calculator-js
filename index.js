window.onload = function(){
const costInput = document.querySelector('.cost');
// console.log(costInput);

const serviceReview = document.querySelector('.review');
// console.log(serviceReview);

const peopleAmount = document.querySelector('.people');
// console.log(peopleAmount);
    
const tipClick = document.querySelector('.tipBut');
// console.log(tipClick);
tipClick.addEventListener('click', calcTip,); //click is the mouse event & calTip is the function
        
function calcTip(){
    let cost = Number(costInput.value);
    let service = Number(serviceReview.value)/100;
    let people = Number(peopleAmount.value);
    
    let tip = (cost * service)/people;

    let tipFinal = document.querySelector('.tipSec, .tip')
    tipFinal.innerText= '$ ' + tip.toFixed(2) + ((people >   1) ? ' each': '');
}


}