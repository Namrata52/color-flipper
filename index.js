const color = document.querySelector(".color");
const buttonClick = document.getElementById("btn");
const arrColor=['red', 'green', '#fa3434',' rgba(2,2,1,0.3)'];

function getRandmNumber(){
    return Math.floor(Math.random()*arrColor.length);
}
buttonClick.addEventListener('click',function() {
    let randomNumber = getRandmNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor =arrColor[randomNumber];
    color.textContent= arrColor[randomNumber]
});