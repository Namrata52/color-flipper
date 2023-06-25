const color = document.querySelector(".color");
const buttonClick = document.getElementById("btn");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandmNumber() {
    return Math.floor(Math.random() * hex.length);
}
buttonClick.addEventListener('click', function () {
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
        hexcolor += hex[getRandmNumber()];
    }
    document.body.style.backgroundColor = hexcolor;
    color.textContent = hexcolor;
});