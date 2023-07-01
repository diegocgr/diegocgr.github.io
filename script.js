// let getContainerPrincipal = document.getElementById("container-principal");
// getContainerPrincipal.style.display = "none";

// let peticionTexto = "";
// alert("Hola...antes de seguir te haré una pregunta...");

// while(peticionTexto != "cosita") {
//     let peticionTexto = prompt('¿Diminutivo cariñoso?').toLocaleLowerCase();

//     if(peticionTexto == "cosita") {
//         alert("¡Chachi!");
//         getContainerPrincipal.style.display = "block";
//         break;
//     }else{
//         alert("Nuuuuuu");

//     }
// };

function loadPregunta() {
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
    }
}

let getRowHoleYes = document.getElementById("row_hole_yes");
getRowHoleYes.style.display = "none";

let getRowHoleNo = document.getElementById("row_hole_no");
getRowHoleNo.style.display = "none";

let getButtonHoleYes = document.getElementById("button_hole_yes");
let getButtonHoleNo = document.getElementById("button_hole_no");

function holeYes() {
    // getButtonHoleYes.disabled = true;
    // getButtonHoleNo.disabled = true;

    getButtonHoleYes.style.display = "none";
    getButtonHoleNo.style.display = "none";

    getRowHoleYes.style.display = "block";
}

function holeNo(){
    getButtonHoleYes.disabled = true;
    getButtonHoleNo.disabled = true;

    getRowHoleNo.style.display = "block";
}