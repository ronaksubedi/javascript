const increasebtn = document.getElementById("increment");
const decreasebtn = document.getElementById("decrement");
const resetbtn = document.getElementById("reset");
const countDisplay = document.getElementById("counter");
let count = 0;
increasebtn.onclick = function() {
    count++;
    countDisplay.textContent = count;
}
decreasebtn.onclick = function() {
    count--;
    countDisplay.textContent = count;
}
resetbtn.onclick = function() {
    count = 0;
    countDisplay.textContent = count;
}