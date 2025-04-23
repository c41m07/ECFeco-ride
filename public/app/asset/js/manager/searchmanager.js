export class searchManager {
    constructor() {
        console.log("SearchManager chargé !");
        this.init(); // Initialisation de la classe
    }

    init() {
        this.search();
        this.filter();
    }

    search() {
        const searchForm = document.getElementById("search");
        if (searchForm) {
            searchForm.addEventListener("submit", (e) => {
                e.preventDefault(); // Empêche l'envoi classique du formulaire
                const departure = document.getElementById("departure")?.value;
                const arrival = document.getElementById("arrival")?.value;
                const date = document.getElementById("date")?.value;
                console.log("Formulaire de recherche envoyé :", {departure, arrival, date});
                // Ici traitement de la recherche (appel API, etc.)
            });
        }
    }

    filter() {
        const filterForm = document.getElementById("filter-form");
        if (filterForm) {
            filterForm.addEventListener("submit", (e) => {
                e.preventDefault(); // Bloque l'envoi normal du formulaire
                const price = document.getElementById("price")?.value;
                const duration = document.getElementById("duration")?.value;
                const rating = document.getElementById("rating")?.value;
                const ecological = document.getElementById("ecological")?.value;
                console.log("Formulaire de filtre envoyé :", {price, duration, rating, ecological});
                // Ici filtrage côté client ou envoi des données au serveur
            });
        }
    }
}
