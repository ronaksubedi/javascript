const checkBox = document.getElementById('checkBox');
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const radio3 = document.getElementById('radio3');
const mySubmit = document.getElementById('mySubmit');
const subpara = document.getElementById('subpara');
const radiopara = document.getElementById('radiopara');

mySubmit.onclick = function() {
    if(checkBox.checked){
        subpara.textContent = "You have subscribe our page.";
    }
    else {
        subpara.textContent = "You have not subscribe our page.";
    }
    if(radio1.checked){
        radiopara.textContent = "You have selected Visa-Card as your payment method.";
    }
    else if(radio2.checked){
        radiopara.textContent = "You have selected Master-card as your payment method.";
    }
    else if(radio3.checked){
        radiopara.textContent = "You have selected PayPal as your payment menthod.";
    }
    else {
        radiopara.textContent = "You must select the payment Methods.";
    }
}