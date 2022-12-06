document.querySelector(".start").addEventListener('click', fullName);

function fullName() {
    let text = document.querySelector(".inputFullName").value;
    let textTrimmed = text.trim();
    let arr = textTrimmed.split(" ");

    let lastName = arr[0];
    let firstName = arr[1];
    let secondName = arr[2];

    let lastNameFixed = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
    let firstNameFixed = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    let secondNameFixed = secondName[0].toUpperCase() + secondName.slice(1).toLowerCase();
    
    document.querySelector('#lastName').innerHTML = 'Фамилия: ' + lastNameFixed;
    document.querySelector('#firstName').innerHTML = 'Имя: ' + firstNameFixed;
    document.querySelector('#secondName').innerHTML = 'Отчество: ' + secondNameFixed;
}
