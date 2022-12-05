function addision() {
    let a = document.getElementById('addOneAd');
    let b = document.getElementById('addTwoAd'); 
    let sum = (+a.value + +b.value);
    document.getElementById('resultAdd').innerHTML = sum;
}

function subtraction() {
    let a = document.getElementById('addOneSub');
    let b = document.getElementById('addTwoSub'); 
    let sum = (+a.value - +b.value);
    document.getElementById('resultSub').innerHTML = sum;
}

function multiplication() {
    let a = document.getElementById('addOneMult');
    let b = document.getElementById('addTwoMult'); 
    let sum = (+a.value * +b.value);
    document.getElementById('resultMult').innerHTML = sum;
}
function division() {
    let a = document.getElementById('addOneDiv');
    let b = document.getElementById('addTwoDiv'); 
    let sum = (+a.value / +b.value);
    if (sum === Infinity || sum === 0) {
        alert("Can't divide by 0");
    } else {
        document.getElementById('resultDiv').innerHTML = sum;
    }
    
}
