export class animator {
    constructor() {
        console.log("Animator chargé !");
        this.init(); // Initialisation de la classe
    }

    init() {
        this.initCommentAnimator();
    }

    initCommentAnimator() {
        const commentCards = document.querySelectorAll(".comment-card");
        commentCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("fade-in");
            }, 200 * index);
        });
    }
}
