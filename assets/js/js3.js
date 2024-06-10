function verificarContraseña () {
    var digito1 = document.getElementById("selector1").value;
    var digito2 = document.getElementById("selector2").value;
    var digito3 = document.getElementById("selector3").value;

    var passwordCorrecto1 = "911";
    var passwordCorrecto2= "714";
    
    var passwordIngresado1= digito1 + digito2 + digito3;
    var passwordIngresado2= digito1 + digito2 + digito3;
    
    if (passwordCorrecto1 === passwordIngresado1) {

        respuesta.innerHTML = "password 1 correcto";
        respuesta.style.color = "green";
       
    } else if (passwordCorrecto2 === passwordIngresado2) {
        
        respuesta.innerHTML = "password 2 correcto"
        respuesta.style.color = "green"
    } else {
        respuesta.innerHTML = "password incorrecto";
        respuesta.style.color = "rgb(255, 0, 43)";
    }
    
    }
 

    document.getElementById('verificarcontraseña').addEventListener('click', verificarContraseña);
