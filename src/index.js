import validator from './validator.js';

export function validar(){
    let creditCardNumber = window.document.getElementById('input-numero').value;
    creditCardNumber = creditCardNumber.replaceAll("-","");
    creditCardNumber = creditCardNumber.replaceAll(" ","");
    let validate = validator.validateCreditCard(creditCardNumber);
    mostrarModal(validate);
}

function mostrarModal(validate){
    let modal = document.getElementById("myModal");
    let modalContainer = document.getElementById("modalContainer");
    let message = document.getElementById("messageModal");
    let imgValida = document.getElementById("imgValid");
    imgValida.style.display = "none"; 
    let imgInvalida = document.getElementById("imgInvalid");
    imgInvalida.style.display = "none"; 
    modal.style.display = "block";
    if(validate){
        modalContainer.style.backgroundColor = "#6AA84F";
        message.innerHTML = "Tarjeta de crédito valida";
        imgValida.style.display = "block";        
    }else{
        modalContainer.style.backgroundColor = "rgb(205 109 109)";
        message.innerHTML = "Tarjeta de crédito invalida";
        imgInvalida.style.display = "block";
    }
}
export function closeModal(){
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

export function mostrarNumTarjeta(){   
    let numTarjeta = document.getElementById("input-numero");
    if(numTarjeta.value.length%5==4 && numTarjeta.value.length<19){
        numTarjeta.value = numTarjeta.value + " ";
    }
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