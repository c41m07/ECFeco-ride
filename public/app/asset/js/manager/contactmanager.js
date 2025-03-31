export class contactManager {
    constructor() {
        console.log("ContactManager chargé !");
        this.init(); // Initialisation de la classe
    }

    init() {
        this.sendMessage();
    }

    sendMessage() {
        const contact = document.getElementById("contact-form");
        if (contact) {
            contact.addEventListener("submit", (e) => {
                e.preventDefault(); // Empêche l'envoi classique du formulaire
                const name = document.getElementById("name")?.value;
                const email = document.getElementById("email")?.value;
                const message = document.getElementById("message")?.value;
                console.log("Formulaire de contact envoyé :", {name, email, message});
                // Ici traitement de l'envoi du message (appel API, etc.)
            });
        }
    }
}
