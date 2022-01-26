import validator from './validator.js';

export function validar(){
    let creditCardNumber = window.document.getElementById('input-numero').value;
    creditCardNumber = creditCardNumber.replaceAll("-","");
    let validate = validator.validateCreditCard(creditCardNumber);
    mostrarModal(validate);
}

function mostrarModal(validate){
    let modal = document.getElementById("myModal");
    let modalContainer = document.getElementById("modalContainer");
    let message = document.getElementById("messageModal");
    modal.style.display = "block";
    if(validate){
        modalContainer.style.backgroundColor = "#6AA84F";
        message.innerHTML = "Tarjeta de credito valida";        
    }else{
        modalContainer.style.backgroundColor = "red"
        message.innerHTML = "Tarjeta de credito invalida";
    }
}
export function closeModal(){
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.validar = validar;
window.closeModal = closeModal;
