document.querySelector(".start").addEventListener('click', fullName);

function fullName() {
    let text = document.querySelector(".inputFullName").value;
    let textTrimmed = text.trim();
    let arr = textTrimmed.split(" ");

    let lastName = arr[0];
    let firstName = arr[1];
    let secondName = arr[2];

    let lastNameEnd = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
    let firstNameEnd = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    let secondNameEnd = secondName[0].toUpperCase() + secondName.slice(1).toLowerCase();
    
    document.querySelector('#lastName').innerHTML = 'Фамилия: ' + lastNameEnd;
    document.querySelector('#firstName').innerHTML = 'Имя: ' + firstNameEnd;
    document.querySelector('#secondName').innerHTML = 'Отчество: ' + secondNameEnd;
}
