const colors = ["GREEN","RED","BLUE","#000000"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//create function for our button
btn.addEventListener("click", function(){
//get a random number from (0-12) 
// console.log("hello world")   
    // const randomNumber = Math.float(Math.random()*2);
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];    
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}