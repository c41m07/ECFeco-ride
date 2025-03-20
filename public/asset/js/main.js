/*
  Script pour déclencher une animation sur les cartes de commentaires
  au chargement de la page (ou au scroll).
*/

// Fonction simple : au chargement de la page, on ajoute la classe "fade-in"
// à toutes les cartes avec la classe "comment-card".
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionne toutes les cartes de commentaires
    const commentCards = document.querySelectorAll(".comment-card");

    // Pour chaque carte, on va ajouter la classe "fade-in" avec un léger délai
    commentCards.forEach((card, index) => {
        // On échelonne l’animation pour un effet progressif
        setTimeout(() => {
            card.classList.add("fade-in");
        }, 200 * index);
    });
});

//click sur le menu burger navbar-toggler suprime la class collapse de la div navbar-collapse
document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.querySelector(".navbar-collapse").classList.toggle("collapse");
});

