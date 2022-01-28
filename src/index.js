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

export function mostrarNumTarjeta(){   
    let numTarjeta = document.getElementById("input-numero");
    let valor = numTarjeta.value;
    let numTarjetaImg = document.getElementById("numero");
    numTarjetaImg.innerHTML = valor;
}
export function mostrarNombreTarjeta(){
    let nomTarjeta = document.getElementById("input-nombre");
    let valor  = nomTarjeta.value;
    let nomTarjetaImg = document.getElementById("nombre");
    nomTarjetaImg.innerHTML = valor;
}
export function mostrarMesTarjeta(){
    let mesTarjeta = document.getElementById("selectMes");
    let valor  = mesTarjeta.value;
    let mesTarjetaImg = document.getElementById("vigMes");
    mesTarjetaImg.innerHTML = valor;
}
export function mostrarAnioTarjeta(){
    let anioTarjeta = document.getElementById("selectAnio");
    let valor  = anioTarjeta.value;
    let anioTarjetaImg = document.getElementById("vigAnio");
    anioTarjetaImg.innerHTML = valor;
}
window.validar = validar;
window.closeModal = closeModal;
window.mostrarNumTarjeta = mostrarNumTarjeta;
window.mostrarNombreTarjeta  = mostrarNombreTarjeta;
window.mostrarMesTarjeta = mostrarMesTarjeta;
window.mostrarAnioTarjeta = mostrarAnioTarjeta;