

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




//Function always active when people write something
// validate for ifs


function validateName() {

    
    var name1 = document.getElementById('name1').value; //value of input
    var name2 = document.getElementById('name1'); // All element of input
    var nameControl= name2.parentNode; // Node father to element



    // least 1 character entered

    if (name1.length == 0 ) {
        

        
        var small = nameControl.querySelector('small');
        small.innerHTML = 'Name is required'
        nameControl.className ='form-control error';


        return false;
    }


    // Only letters

    if (!name1.match(/^[A-Za-z]+$/)) {

        var small = nameControl.querySelector('small');
        small.innerHTML = 'Write Name'
        nameControl.className ='form-control error';

        return false;
    }

    // least 3 character entered

    if (name1.length <= 3) {

        var small = nameControl.querySelector('small');
        small.innerHTML = 'Write Name'
        nameControl.className ='form-control error';

        return false;
    }

    // Less than 25 characters

    if (name1.length >= 25) {

        var small = nameControl.querySelector('small');
        small.innerHTML = 'Limit 25 characters'
        nameControl.className ='form-control error';

        return false;
    }
    

    // input validate

    nameControl.className = 'form-control success';
    return true;


}

function validateLastName() {

    
    var lastName = document.getElementById('lastname').value; //value of input
    var lastName1 = document.getElementById('lastname'); // All element of input
    var lastnameControl= lastName1.parentNode; // Node father to element



    // least 1 character entered

    if (lastName.length == 0 ) {
        

        
        var small = lastnameControl.querySelector('small');
        small.innerHTML = 'Last Name is required'
        lastnameControl.className ='form-control error';


        return false;
    }


    // Only letters

    if (!lastName.match(/^[A-Za-z]+$/)) {

        var small = lastnameControl.querySelector('small');
        small.innerHTML = 'Write Last Name'
        lastnameControl.className ='form-control error';

        return false;
    }

    // least 3 character entered

    if (lastName.length <= 3) {

        var small = lastnameControl.querySelector('small');
        small.innerHTML = 'Write Last Name'
        lastnameControl.className ='form-control error';

        return false;
    }

    // Less than 25 characters

    if (lastName.length >= 25) {

        var small = lastnameControl.querySelector('small');
        small.innerHTML = 'Limit 25 characters'
        lastnameControl.className ='form-control error';

        return false;
    }
    

    // input validate

    lastnameControl.className = 'form-control success';
    return true;


}


function validateAddress() {

    
    var address = document.getElementById('address').value; //value of input
    var address1 = document.getElementById('address'); // All element of input
    var addressControl= address1.parentNode; // Node father to element



    // least 1 character entered

    if (address.length == 0 ) {
        

        
        var small = addressControl.querySelector('small');
        small.innerHTML = 'Address is required'
        addressControl.className ='form-control error';


        return false;
    }


    // Only regex

    if (!address.match(/^cll|c|av|anv|trans\b/g)) {

        var small = addressControl.querySelector('small');
        small.innerHTML = 'Start address with cll, c, av, anv or trans'
        addressControl.className ='form-control error';

        return false;
    }

    // least 3 character entered

    if (address.length <= 3) {

        var small = addressControl.querySelector('small');
        small.innerHTML = 'Write Address'
        addressControl.className ='form-control error';

        return false;
    }

    // Less than 25 characters

    if (address.length >= 25) {

        var small = addressControl.querySelector('small');
        small.innerHTML = 'Limit 25 characters'
        addressControl.className ='form-control error';

        return false;
    }
    

    // input validate

    addressControl.className = 'form-control success';
    return true;


}



function validateID() {

    
    var id1 = document.getElementById('idConfig').value; //value of input
    var id2 = document.getElementById('idConfig'); // All element of input
    var idControl= id2.parentNode; // Node father to element



    // least 1 character entered

    if (id1.length == 0 ) {
        

        
        var small = idControl.querySelector('small');
        small.innerHTML = 'ID is required and Write only numbers'
        idControl.className ='form-control error';


        return false;
    }


    // Only digits

    if (!id1.match(/\d/g)) {

        var small = idControl.querySelector('small');
        small.innerHTML = 'Write ID and only numbers'
        idControl.className ='form-control error';

        return false;
    }

    // least 3 character entered

    if (id1.length <= 10) {

        var small = idControl.querySelector('small');
        small.innerHTML = 'Less 10 numbers'
        idControl.className ='form-control error';

        return false;
    }

    // Less than 25 characters

    if (id1.length >= 20) {

        var small = idControl.querySelector('small');
        small.innerHTML = 'Limit 20 characters'
        idControl.className ='form-control error';

        return false;
    }
    

    // input validate

    idControl.className = 'form-control success';
    return true;


}

function validatePassword() {

    
    var password = document.getElementById('password').value; //value of input
    var password1 = document.getElementById('password'); // All element of input
    var passwordControl= password1.parentNode; // Node father to element
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{15,})");


    // least 1 character entered

    if (password.length == 0 ) {
        
        
        var small = passwordControl.querySelector('small');
        small.innerHTML = 'Password is required'
        passwordControl.className ='form-control error';


        return false;
    }


    // Only digits

    if (!password.match(strongRegex)) {

        var small = passwordControl.querySelector('small');
        small.innerHTML = 'Password required 1 uppercase alphabetical character, 1 numeric character, least one special character and must be need 15 characters or longer';
        passwordControl.className ='form-control error';

        return false;
    }

    // least 3 character entered

    if (password.length <= 15) {

        var small = passwordControl.querySelector('small');
        small.innerHTML = 'Less 15 numbers'
        passwordControl.className ='form-control error';

        return false;
    }

    // Less than 25 characters

    if (password.length >= 20) {

        var small = passwordControl.querySelector('small');
        small.innerHTML = 'Limit 20 characters'
        passwordControl.className ='form-control error';

        return false;
    }
    

    // input validate

    passwordControl.className = 'form-control success';
    return true;


}

function validateEmail() {

    
    var email = document.getElementById('email').value; //value of input
    var email1 = document.getElementById('email'); // All element of input
    var emailControl= email1.parentNode; // Node father to element
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{15,})");


    // least 1 character entered

    if (email.length == 0 ) {
        
        
        var small = emailControl.querySelector('small');
        small.innerHTML = 'Email is required'
        emailControl.className ='form-control error';


        return false;
    }


  

    if (email.length <= 10) {

        var small = emailControl.querySelector('small');
        small.innerHTML = 'Write your Email'
        emailControl.className ='form-control error';

        return false;
    }

    // Less than 25 characters

    if (email.length >= 120) {

        var small = emailControl.querySelector('small');
        small.innerHTML = 'Limit 120 characters'
        emailControl.className ='form-control error';

        return false;
    }
    

    // input validate

    emailControl.className = 'form-control success';
    return true;


}