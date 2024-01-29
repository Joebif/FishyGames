var password = "Pyrolf";

function passcheck () {

    if(document.getElementById('pass1').value != password) {
        alert('Mot de Passe Incorrect.');
    return false;
}

if(document.getElementById('pass1').value == password) {
    alert('Mot de passe Correct.');        
    } 
}