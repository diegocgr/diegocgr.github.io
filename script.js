let getContainerPrincipal = document.getElementById("container-principal");
getContainerPrincipal.style.display = "none";

alert("Hola...antes de seguir te haré una pregunta...");
let peticionTexto = prompt('¿Diminutivo cariñoso?').toLocaleLowerCase();

// console.log("texto: " + peticionTexto);

while(peticionTexto != "cosita") {
    let peticionTexto = prompt('¿Diminutivo cariñoso?').toLocaleLowerCase();

    if(peticionTexto == "cosita") {
        alert("SIIIIII");
        getContainerPrincipal.style.display = "block";
        break;
    }else{
        alert("NUUUUUU");

    }
};