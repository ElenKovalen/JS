function addision() {
    let a = document.getElementById('addOne');
    let b = document.getElementById('addTwo'); 
    let sum = (a.value + b.value);
    document.getElementById('resultAdd').innerHTML = sum;
}

function subtraction() {
    let a = document.getElementById('addOne');
    let b = document.getElementById('addTwo'); 
    let sum = (a.value - b.value);
    document.getElementById('resultSub').innerHTML = sum;
}

function multiplication() {
    let a = document.getElementById('addOne');
    let b = document.getElementById('addTwo'); 
    let sum = (a.value * b.value);
    document.getElementById('resultMult').innerHTML = sum;
}
function division() {
    let a = document.getElementById('addOne');
    let b = document.getElementById('addTwo'); 
    let sum = (a.value / b.value);
    document.getElementById('resultDiv').innerHTML = sum;
}
