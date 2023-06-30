let getContainerPrincipal = document.getElementById("container-principal");
getContainerPrincipal.style.display = "none";

let peticionTexto = "";
alert("Hola...antes de seguir te haré una pregunta...");

while(peticionTexto != "cosita") {
    let peticionTexto = prompt('¿Diminutivo cariñoso?').toLocaleLowerCase();

    if(peticionTexto == "cosita") {
        alert("¡Chachi!");
        getContainerPrincipal.style.display = "block";
        break;
    }else{
        alert("Nuuuuuu");

    }
};