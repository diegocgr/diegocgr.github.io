let getRowHoleYes = document.getElementById("row_hole_yes");
getRowHoleYes.style.display = "none";

let getRowHoleNo = document.getElementById("row_hole_no");
getRowHoleNo.style.display = "none";

let getButtonHoleYes = document.getElementById("button_hole_yes");
let getButtonHoleNo = document.getElementById("button_hole_no");

let getImgHole = document.getElementById("img_hole");
let getImgPostHole = document.getElementById("img_post_hole");
let getImgNoHole = document.getElementById("img_no_hole");

function holeYes() {
    getButtonHoleYes.style.display = "none";
    getButtonHoleNo.style.display = "none";

    getImgHole.style.display = "none";
    getImgPostHole.style.display = "block";

    getRowHoleYes.style.display = "block";
}

function holeNo(){
    getButtonHoleYes.style.display = "none";
    getButtonHoleNo.style.display = "none";

    getImgHole.style.display = "none";
    getImgNoHole.style.display = "block";

    getRowHoleNo.style.display = "block";
}