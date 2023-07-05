function loadPregunta() {
    let getElementosOcultos = document.getElementsByClassName("div_oculto");
    console.log(getElementosOcultos.length)

    let peticionTexto = "";
    let peticionFecha = "";

    alert("Hola...antes de seguir te haré un par de preguntas...");

    while(peticionTexto != "cosita") {
        let peticionTexto = prompt('¿Diminutivo cariñoso?').toLocaleLowerCase();

        if(peticionTexto == "cosita") {
            alert("¡Chachi!");
            break;
        }else{
            alert("Nuuuuuu");
        }
    };

    while(peticionFecha != "15/12/1992") {
        let peticionFecha = prompt('¿Cuándo es tu fecha especial? | dd/mm/aaaa');

        if(peticionFecha == "15/12/1992") {
            alert("¡Chachi!");
            break;
        }else{
            alert("Nuuuuuu");
        }
    };

    $(".div_oculto").removeClass("div_oculto");
}