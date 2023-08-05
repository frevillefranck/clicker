let affich_result = document.querySelector("#affich_result");

//BOUTON CLICK +1
let bt_1 = document.querySelector("#bt_1");
let cout_click_1 = 2;
let nb_click_1 = 0;

//BOUTON CLICK +10
let bt_10 = document.querySelector("#bt_10");
let cout_click_10 = 20;
let nb_click_10 = 0;

//BOUTON CLICK +100
let bt_100 = document.querySelector("#bt_100");
let cout_click_100 = 200;
let nb_click_100 = 0;

//BOUTON RESET
let bt_reset = document.querySelector("#bt_reset");

//BOUTON CPS +1
let bt_cps_1 = document.querySelector("#bt_cps_1")
let cout_cps_1 = 10;
let nb_cps_1 = 0;

//BOUTON CPS +10
let bt_cps_10 = document.querySelector("#bt_cps_10")
let cout_cps_10 = 100;
let nb_cps_10 = 0;
//BOUTON CPS +1
let bt_cps_100 = document.querySelector("#bt_cps_100")
let cout_cps_100 = 1000;
let nb_cps_100 = 0;

//TOTAL CLICK
let total_click = document.querySelector("#total_click");

//TOTAL CPS
let total_cps = document.querySelector("#total_cps");

//VARIABLES
let compteur = 0;
let cps = 0;
let click = 1;
let ajout = 0;

//EVENTS
bt_1.addEventListener("click", () => AjoutClick1())
bt_10.addEventListener("click", () => AjoutClick10())
bt_100.addEventListener("click", () => AjoutClick100())
bt_cps_1.addEventListener("click", () => CPS1())
bt_cps_10.addEventListener("click", () => CPS10())
bt_cps_100.addEventListener("click", () => CPS100())
affich_result.addEventListener('click', () => ClickDiv())

//FONCTIONS
setInterval(function () {
    if (compteur > 9) {
        bt_1.style.display = "flex"
        bt_cps_1.style.display = "flex"

    } if (compteur > 99) {
        bt_10.style.display = "flex"
        bt_cps_10.style.display = "flex"

    } if (compteur > 999) {
        bt_100.style.display = "flex"
        bt_cps_100.style.display = "flex"

    }
    affich_result.textContent = compteur;
    compteur = compteur + cps;

}, 1000)
// function Reset() {
//     click = 0;
//     cps = 0;
//     compteur = 0;
//     affich_result.textContent = compteur;
// }
function AjoutClick1() {
    if (cout_click_1 <= compteur) {
        compteur -= cout_click_1;
        cout_click_1 += 2;
        click += 1;
        affich_result.textContent = compteur;
        nb_click_1++;
        bt_1.textContent = `Click +1 ( x ${nb_click_1}). Coût du prochain niveau : ${cout_click_1}`
        total_click.textContent = `Click : ${click}`
    }

}
function AjoutClick10() {
    if (cout_click_10 <= compteur) {
        compteur -= cout_click_10;
        cout_click_10 += 20;
        click += 10;
        affich_result.textContent = compteur;
        nb_click_10++;
        bt_10.textContent = `Click +10 ( x ${nb_click_10}). Coût du prochain niveau : ${cout_click_10}`
        total_click.textContent = `Click : ${click}`

    }

} function AjoutClick100() {
    if (cout_click_100 <= compteur) {
        compteur -= cout_click_100;
        cout_click_100 += 200;
        click += 100;
        affich_result.textContent = compteur;
        nb_click_100++;
        bt_100.textContent = `Click +100 ( x ${nb_click_100}). Coût du prochain niveau : ${cout_click_100}`
        total_click.textContent = `Click : ${click}`

    }
}
function CPS1() {
    if (cout_cps_1 <= compteur) {
        compteur -= cout_cps_1
        cout_cps_1 += 10;
        cps += 1
        nb_cps_1++;
        affich_result.textContent = compteur;
        bt_cps_1.textContent = `CPS +1 ( x ${nb_cps_1}). Coût du prochain niveau : ${cout_cps_1}`
        total_cps.textContent = `Click par seconde : ${cps}`
    }
}
function CPS10() {
    if (cout_cps_10 <= compteur) {
        compteur -= cout_click_10
        cout_cps_10 += 100;
        cps += 10
        affich_result.textContent = compteur;
        nb_cps_10++;
        bt_cps_10.textContent = `CPS +10 ( x ${nb_cps_10}). Coût du prochain niveau : ${cout_cps_10}`
        total_cps.textContent = `Click par seconde : ${cps}`
    }
}
function CPS100() {
    if (cout_cps_100 <= compteur) {
        compteur -= cout_click_100
        cout_cps_100 += 1000;
        cps += 100
        affich_result.textContent = compteur;
        nb_cps_100++;
        bt_cps_100.textContent = `CPS +100 ( x ${nb_cps_100}). Coût du prochain niveau : ${cout_cps_100}`
        total_cps.textContent = `Click par seconde : ${cps}`
    }
}
function ClickDiv() {
    if (compteur > 9) {
        bt_1.style.display = "flex"
        bt_cps_1.style.display = "flex"

    } if (compteur > 99) {
        bt_10.style.display = "flex"
        bt_cps_10.style.display = "flex"

    } if (compteur > 999) {
        bt_100.style.display = "flex"
        bt_cps_100.style.display = "flex"
    }
    compteur = compteur + click
    affich_result.textContent = compteur;
}






