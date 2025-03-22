//consol log pour vérifier que le fichier est bien chargé
console.log("Main.js loaded")
//consol log pour vérifier que bootstrap est bien chargé
console.log("Bootstrap Modal Plugin:", typeof bootstrap.Modal);
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








