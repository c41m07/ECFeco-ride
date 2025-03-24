// console.log pour vérifier que le fichier JavaScript est bien chargé
console.log("Main.js loaded");

// console.log pour vérifier que Bootstrap est bien chargé (en particulier le plugin Modal)
console.log("Bootstrap Modal Plugin:", typeof bootstrap.Modal);

// Dès que la page est entièrement chargée...
document.addEventListener("DOMContentLoaded", () => {
    //import de nav.html dans le header
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    fetch("/public/asset/html/nav.html")
        .then((response) => response.text())
        .then((data) => {
            header.innerHTML = data;
            const loginBtn = header.querySelector(".btn-login");
            if (loginBtn) {
                loginBtn.addEventListener("click", () => {
                    console.log("Bouton de connexion cliqué");
                    const modalLogin = document.querySelector("#modalLogin");
                    const modalLog = new bootstrap.Modal(modalLogin);
                    modalLog.show();
                });
            }
        });
    fetch("/public/asset/html/footer.html")
        .then((response) => response.text())
        .then((data) => {
            footer.innerHTML = data;
        });

    // Je sélectionne toutes les cartes de commentaires avec la classe "comment-card"
    const commentCards = document.querySelectorAll(".comment-card");

    // Pour chaque carte, j’ajoute la classe "fade-in" avec un petit délai pour un effet sympa
    commentCards.forEach((card, index) => {
        // Je fais un décalage progressif dans le temps pour créer un effet d’apparition fluide
        setTimeout(() => {
            card.classList.add("fade-in");
        }, 200 * index);
    });

    // Écouteur pour le bouton "Commencer maintenant" dans la section hero et la section cta (s’il existe)
    const startBtn = document.querySelector(".hero-section .btn-success.btn-lg");
    const startBtn2 = document.querySelector(".section-cta .btn.btn-success.btn-lg.me-3");
     if (startBtn && startBtn2) {
    [startBtn, startBtn2].forEach((btn) => {
        btn.addEventListener("click", () => {
            console.log("Bouton 'Commencer maintenant' cliqué");
            // Ici je pourrais ajouter l’ouverture d’un modal de login plus tard
            const modalSignIn = document.querySelector("#modalRegister");
            const modalSign = new bootstrap.Modal(modalSignIn);
            modalSign.show();
        });
    });
     }


    // Écouteur pour le formulaire de recherche dans la page de covoiturage (s’il existe)
    const forms = document.querySelectorAll("form");
    if (forms.length > 0) {
        forms[0].addEventListener("submit", (e) => {
            e.preventDefault(); // j’empêche l’envoi classique du formulaire
            const departure = document.getElementById("departure")?.value;
            const arrival = document.getElementById("arrival")?.value;
            const date = document.getElementById("date")?.value;
            console.log("Formulaire de recherche envoyé :", { departure, arrival, date });
            // Ici je pourrais faire le traitement de la recherche (appel API, etc.)

        });
    }

    // Écouteur pour le formulaire de filtre dans la page de covoiturage (s’il existe)
    if (forms.length > 1) {
        forms[1].addEventListener("submit", (e) => {
            e.preventDefault(); // je bloque l'envoi normal du formulaire
            const price = document.getElementById("price")?.value;
            const duration = document.getElementById("duration")?.value;
            const rating = document.getElementById("rating")?.value;
            const ecological = document.getElementById("ecological")?.value;
            console.log("Formulaire de filtre envoyé :", { price, duration, rating, ecological });
            // Ici je pourrais faire le filtrage côté client ou envoyer les données au serveur

        });
    }
});

