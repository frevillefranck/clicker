let affich_result = document.querySelector("#affich_result");
let bt_1 = document.querySelector("#bt_1");
let bt_10 = document.querySelector("#bt_10");
let bt_100 = document.querySelector("#bt_100");
let bt_reset = document.querySelector("#bt_reset");
let compteur = 0;
let cps = 0;
let click = 1;
let ajout = 0;
bt_1.addEventListener("click", () => AjoutClick1())
bt_10.addEventListener("click", () => AjoutClick10())
bt_100.addEventListener("click", () => AjoutClick100())
bt_cps_1.addEventListener("click", () => CPS1())
bt_reset.addEventListener("click", () => Reset())
affich_result.addEventListener('click', () => ClickDiv())
function Reset() {
    click = 0;
    cps = 0;
    compteur = 0;
    affich_result.textContent = compteur
}
function AjoutClick1() {
    click += 1;
}
function AjoutClick10() {
    click += 10;
} function AjoutClick100() {
    click += 100;
}
function CPS1() {
    cps += 1
    compteur -= 10
}
function ClickDiv() {

    compteur = compteur + click
    affich_result.textContent = compteur;
    console.log(compteur)
    if (compteur > 9) {
        bt_1.style.display = "block"
        bt_cps_1.style.display = "block"

    } if (compteur > 99) {
        bt_10.style.display = "block"

    } if (compteur > 999) {
        bt_100.style.display = "block"
    }
}






setInterval(function () {
    affich_result.textContent = compteur;
    compteur = compteur + cps
}, 1000)
