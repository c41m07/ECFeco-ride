// Importation logInform de authManager (obligatoire pour le formulaire de connexion)
import {authManager} from './authmanager.js';

export class headerManager {
    constructor() {
        console.log("HeaderManager chargé !");
        this.init(); // Initialisation de la classe
    }

    init() {
        this.loadHeader();        // Charge le header + modal de connexion + formulaire de connexion
        this.loadFooter();        // Charge le footer
        this.initSignInModal();   // Gère les modal des boutons "Commencer maintenant/inscriptions"
    }

    loadHeader() {
        const header = document.querySelector("header");
        fetch("/asset/html/nav.html")
            .then((response) => response.text())
            .then((data) => {
                header.innerHTML = data;
                this.initLogInModal();
                // Instanciation de authManager et appel de logInForm
                const authM = new authManager();
                authM.logInForm();
            });
    }

    loadFooter() {
        const footer = document.querySelector("footer");
        fetch("/asset/html/footer.html")
            .then((response) => response.text())
            .then((data) => {
                footer.innerHTML = data;
            });
    }

    initSignInModal() {
        const startBtn = document.getElementById("btnSignIn");
        const startBtn2 = document.getElementById("btnSignIn2");
        if (startBtn || startBtn2) {
            [startBtn, startBtn2].forEach((btn) => {
                if (btn) {
                    btn.addEventListener("click", () => {
                        console.log("Bouton 'Commencer maintenant' cliqué");
                        const modalSignIn = document.getElementById("modalRegister");
                        const modalSign = new bootstrap.Modal(modalSignIn);
                        modalSign.show();
                    });
                }
            });
        }
    }

    initLogInModal() {
        // Si le bouton existe, ajout d'un écouteur d'événement au clic pour afficher la modale de connexion
        const header = document.querySelector("header");
        const loginBtn = header.querySelector(".btn-login");
        if (loginBtn) {
            loginBtn.addEventListener("click", () => {
                console.log("Bouton de connexion cliqué");
                const modalLogin = document.getElementById("modalLogin");
                const modalLog = new bootstrap.Modal(modalLogin);
                modalLog.show();
            });
        }
    }
}
