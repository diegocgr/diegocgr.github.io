function loadPregunta() {
    try {
        let peticionFecha = "";
        let peticionTexto = "";

        /*
        alert("Hola...antes de seguir te haré un par de preguntas...");

        while(peticionFecha != "15/12/1992") {
            let peticionFecha = prompt('¿Cuándo es tu fecha especial?\ndd/mm/aaaa');

            if(peticionFecha == "15/12/1992") {
                alert("¡Chachi!");
                break;
            }else{
                alert("Nuuuuuu");
            }
        };

        while(peticionTexto != "cosita") {
            let peticionTexto = prompt('¿Diminutivo cariñoso?').toLocaleLowerCase();

            if(peticionTexto == "cosita") {
                alert("😊");
                break;
            }else{
                alert("🤐");
            }
        };
        */

        $(".div_oculto").removeClass("div_oculto");

    } catch (error) {
        $(".div_oculto_otro").removeClass("div_oculto_otro");
        console.error(error.message);
    }
}

/* -------------------------------------------------------------------------------- */

// Get the button:
let mybutton = document.getElementById("btn_subir");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function navegarArriba() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* -------------------------------------------------------------------------------- */

var text = ["Miedo", "Ira", "Manía", "Paranoia", "Depresión", "Futilidad", "Impulsividad", "Soledad", "Desesperanza"];
var counter = 0;
var elem = document.getElementById("changeText");

setInterval(
    function() {
        elem.innerHTML = text[counter];
        counter++;
        if (counter >= text.length) {
            counter = 0;
        }
    }, 
    600
);

/* -------------------------------------------------------------------------------- */

function mostrarFinal() {
    $("#div_semifinal").addClass("oculto");
    $("#div_final").removeClass("oculto");
}

/* -------------------------------------------------------------------------------- */

var textLetra = [
    "I might not be the right one", 
    "It might not be the right time", 
    "But there's something about us I've got to do", 
    "Some kind of secret I will share with you", 
    "I need you more than anything in my life", 
    "I want you more than anything in my life", 
    "I'll miss you more than anyone in my life", 
    "I love you more than anyone in my life"
];
var counterLetra = 0;
var elemLetra = document.getElementById("letra");

setInterval(
    function() {
        elemLetra.innerHTML = textLetra[counterLetra];
        counterLetra++;
        if (counterLetra >= textLetra.length) {
            counterLetra = 0;
        }
    }, 
    2000
);

/* -------------------------------------------------------------------------------- */

document.getElementById("video_blame").playbackRate = 0.5;

document.getElementById("video_check").playbackRate = 1.5;