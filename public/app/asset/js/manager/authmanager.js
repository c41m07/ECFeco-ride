export class authManager {
    constructor() {
        console.log("AuthManager chargé !");
        this.init(); // Initialisation de la classe
    }

    init() {
        this.logInForm();
        this.signInForm();
    }

    logInForm() {
        const loginForm = document.getElementById("modalLogin")?.querySelector("form");
        // Si le bouton existe, ajout d'un écouteur d'événement au clic pour récupérer les informations du formulaire
        if (loginForm) {
            loginForm.addEventListener("submit", (e) => {
                e.preventDefault(); // Empêche l'envoi classique du formulaire
                const email = document.getElementById("emailLogin")?.value;
                const password = document.getElementById("passwordLogin")?.value;
                console.log("Formulaire de connexion envoyé :", {email, password});
                // Ici appel à une API pour vérifier les identifiants
            });
        }
    }

    signInForm() {
        const registerForm = document.getElementById("registerForm");
        if (registerForm) {
            registerForm.addEventListener("submit", (e) => {
                e.preventDefault(); // Empêche l'envoi classique du formulaire
                const name = document.getElementById("nameSignIn")?.value;
                const email = document.getElementById("emailSignIn")?.value;
                const password = document.getElementById("passwordSignIn")?.value;
                console.log("Formulaire d'inscription envoyé :", {name, email, password});
                // Ici appel à une API pour enregistrer le nouvel utilisateur
            });
        }
    }
}
