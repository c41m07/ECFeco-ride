// console.log pour vérifier que le fichier JavaScript est bien chargé
console.log("Main.js loaded");

// console.log pour vérifier que Bootstrap est bien chargé (en particulier le plugin Modal)
console.log("Bootstrap Modal Plugin:", typeof bootstrap.Modal);

// Dès que la page est entièrement chargée...
document.addEventListener("DOMContentLoaded", () => {
    //import de nav.html dans le header et footer.html dans le footer
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    fetch("/asset/html/nav.html")
        .then((response) => response.text())
        .then((data) => {
            header.innerHTML = data;
            // Si le bouton existe, j’ajoute un écouteur d’événement au clic pour afficher la modale de connexion
            const loginBtn = header.querySelector(".btn-login");
            const loginForm = document.getElementById("modalLogin")?.querySelector("form");
            if (loginBtn) {
                loginBtn.addEventListener("click", () => {
                    console.log("Bouton de connexion cliqué");
                    const modalLogin = document.getElementById("modalLogin");
                    const modalLog = new bootstrap.Modal(modalLogin);
                    modalLog.show();
                });
            }
            // si le bouton existe j'ajoute un écouteur d'evenement au click pour me renvoyer les informations du formulaire
            if (loginForm) {
                loginForm.addEventListener("submit", (e) => {
                    e.preventDefault(); // j’empêche l’envoi classique du formulaire
                    const email = document.getElementById("emailLogin")?.value;
                    const password = document.getElementById("passwordLogin")?.value;
                    console.log("Formulaire de connexion envoyé :", {email, password});
                    // Ici je pourrais ajouter un appel à une API pour vérifier les identifiants

                });
            }
        });
    fetch("/asset/html/footer.html")
        .then((response) => response.text())
        .then((data) => {
            footer.innerHTML = data;
        });

    // animation des cartes de commentaires
    const commentCards = document.querySelectorAll(".comment-card");
    commentCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("fade-in");
        }, 200 * index);
    });

});

// Si le bouton existe, j’ajoute un écouteur d’événement au clic pour afficher la modale d’inscription
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
    // si le formulaire d'inscription existe, j'ajoute un écouteur d'événement au clic pour me renvoyer les informations du formulaire
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault(); // j’empêche l’envoi classique du formulaire
            const name = document.getElementById("nameSignIn")?.value;
            const email = document.getElementById("emailSignIn")?.value;
            const password = document.getElementById("passwordSignIn")?.value;
            console.log("Formulaire d’inscription envoyé :", {name, email, password});
            // Ici je pourrais ajouter un appel à une API pour enregistrer le nouvel utilisateur

        });
    }
}


// Si le bouton existe, j’ajoute un écouteur d’événement au clic pour rechercher des offres
const searchForm = document.getElementById("search");
if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault(); // j’empêche l’envoi classique du formulaire
        const departure = document.getElementById("departure")?.value;
        const arrival = document.getElementById("arrival")?.value;
        const date = document.getElementById("date")?.value;
        console.log("Formulaire de recherche envoyé :", {departure, arrival, date});
        // Ici je pourrais faire le traitement de la recherche (appel API, etc.)

    });
}


// Si le bouton existe, j’ajoute un écouteur d’événement au clic pour filtrer les offres
const filterForm = document.getElementById("filter-form");
if (filterForm) {
    filterForm.addEventListener("submit", (e) => {
        e.preventDefault(); // je bloque l'envoi normal du formulaire
        const price = document.getElementById("price")?.value;
        const duration = document.getElementById("duration")?.value;
        const rating = document.getElementById("rating")?.value;
        const ecological = document.getElementById("ecological")?.value;
        console.log("Formulaire de filtre envoyé :", {price, duration, rating, ecological});
        // Ici je pourrais faire le filtrage côté client ou envoyer les données au serveur

    });
}


// si le bouton existe, j’ajoute un écouteur d’événement au clic pour envoyer le formulaire de contact
const contact = document.getElementById("contact-form");
if (contact) {
    contact.addEventListener("submit", (e) => {
        e.preventDefault(); // j’empêche l’envoi classique du formulaire
        const name = document.getElementById("name")?.value;
        const email = document.getElementById("email")?.value;
        const message = document.getElementById("message")?.value;
        console.log("Formulaire de contact envoyé :", {name, email, message});
        // Ici je pourrais ajouter un appel à une API pour envoyer le message par email

    });
}
