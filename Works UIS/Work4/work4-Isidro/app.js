

//countries

document.addEventListener('DOMContentLoaded',() => {

    const selectDrop = document.querySelector('#countries');
    //const selectDrop = document.getElementById('countries');
    
    fetch('https://restcountries.com/v3.1/all').then(res => {
        return res.json();
    }).then(data =>{
        let output ="";
        data.forEach(country => {
            output += `<option>${country.name.common}</option>}`;
            console.log(country.name.common);
        });
    
        selectDrop.innerHTML = output;
    }).catch(err => {
        console.log(err);
    })
    
    });





//--------------------------------VALID CONFIRM--------------------//



const form = document.getElementById('form');
const name = document.getElementById('name');
const address = document.getElementById('address');
const lastname = document.getElementById('lastname');
const id = document.getElementById('id');
const password = document.getElementById('password');
const phone = document.getElementById('phone');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();

});

function checkInput(){
    //get values form inputs 
    const nameValue = name.value.trim();
    const addressValue = address.value.trim();
    const lastnameValue = lastname.value.trim();
    const idValue = id.value.trim();
    const passwordValue = password.value.trim();
    const phoneValue = phone.value.trim();

    if (lastnameValue == '') {
        //show error
        //add error class

        setErrorfor(lastname,'Name need 20 characters');
    } else {
        //add success class
        setSuccessfor(lastname);

    }

}

function setErrorfor(input, message) {
    
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class

    formControl.className = 'form-control error';
}

function setSuccessfor(input) {

    const formControl = input.parentElement;
    //add succes class

    formControl.className = 'form-control success';
    
}