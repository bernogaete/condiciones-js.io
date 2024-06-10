function verificarCantidad () {
    var digito1 = document.getElementById('valor1').value;
    var digito2 = document.getElementById('valor2').value;
    var digito3 = document.getElementById('valor3').value;

    var valor1 = Number (digito1)
    var valor2 = Number (digito2)
    var valor3 = Number (digito3)

    var numerosStickersIngresados = valor1 + valor2 + valor3;
    var mensaje= document.getElementById("mensaje");

    if (numerosStickersIngresados >=1 && numerosStickersIngresados <= 10) {
        mensaje.innerHTML="llevas " + numerosStickersIngresados + " stickers";
        mensaje.style.color = "green"

    }else if (numerosStickersIngresados <=0){
        mensaje.innerHTML="no llevas suficientes stickers";
        mensaje.style.color = "black"

    }else {
        mensaje.innerHTML="llevas demasiados stickers";
        mensaje.style.color = "red"
    }


        
    
}

    document.getElementById('verificarcantidad').addEventListener('click', verificarCantidad);