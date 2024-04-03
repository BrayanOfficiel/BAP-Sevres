const serviceTitle = document.querySelector('.services-title');
const serviceContent = document.querySelector('.services-body');
const serviceTel = document.getElementById('service-tel');
const serviceAdresse = document.getElementById('service-adresse');
const serviceSite = document.getElementById('service-site');
const serviceLogos = document.querySelectorAll('.services-logo');
const serviceImage = document.querySelector('.services-image');
const lundi = document.getElementById('lundi');
const mardi = document.getElementById('mardi');
const mercredi = document.getElementById('mercredi');
const jeudi = document.getElementById('jeudi');
const vendredi = document.getElementById('vendredi');
const samedi = document.getElementById('samedi');
const dimanche = document.getElementById('dimanche');
let carouselClicked = false;

// Détails des services
const servicesDetails = {
    'escale': {
        title: "L'Esc@le",
        content: "Explorez le monde numérique avec L'esc@le, lieu dédié aux 12 à 30 ans. Des formations spécialisées sur la sécurité numérique et un accompagnement pour vos démarches administratives en ligne vous attendent !",
        tel: "01 41 14 12 20",
        adresse: "7 Sent. Brezin, 92310 Sèvres",
        lien: "https://maps.app.goo.gl/wd69jPMewWUSAwJY8",
        site: "https://www.sevres.fr/lescale",
        horaires: {
            "Lundi": "Fermé",
            "Mardi": "14h - 18h30",
            "Mercredi": "10h - 12h30 | 14h - 18h30",
            "Jeudi": "14h - 18h30",
            "Vendredi": "14h - 18h30",
            "Samedi": "10h - 14h",
            "Dimanche": "Fermé"
        }
    },
    'mediatheque': {
        title: "Médiathèque de Sèvres",
        content: "Découvrez notre espace en ligne regroupant ressources culturelles et éducatives. Profitez d'ateliers sur les dernières technologies et de l'accès à Internet pour tous. Pour les amateurs de lecture et les passionnés de technologie, qu'ils soient petits ou grands.",
        tel: "01 41 14 12 13",
        adresse: "8 Rue de ville d'Avray, 92310 Sèvres",
        lien: "https://maps.app.goo.gl/rJWsF3CqCrWh9zms6",
        site: "https://mediatheque.sevres.fr/",
        horaires: {
            "Lundi": "Fermé",
            "Mardi": "14h - 19h30",
            "Mercredi": "10h - 18h30",
            "Jeudi": "14h - 19h30",
            "Vendredi": "14h - 18h30",
            "Samedi": "10h - 18h30",
            "Dimanche": "Fermé"
        }
    },
    'maison-famille': {
        title: "Maison de la Famille",
        content: "Explorez un soutien familial adapté à vos besoins, même dans le monde numérique. Des conseils en ligne sur les démarches administratives, des ateliers sur l'utilisation responsable d'Internet pour les enfants et nos solutions numériques pour simplifier votre quotidien !",
        tel: "01 45 07 21 38",
        adresse: "64 Rue des Binelles, 92310 Sèvres",
        lien: "https://maps.app.goo.gl/AYiT82Lmm1BvdeBU7",
        site: "https://www.maisondelafamille-sevres.org/",
        horaires: {
            "Lundi": "14h - 19h",
            "Mardi": "10h - 13h | 13h30 - 19h",
            "Mercredi": "10h - 13h | 13h30 - 19h",
            "Jeudi": "10h - 13h | 13h30 - 20h",
            "Vendredi": "10h - 13h | 13h30 - 18h",
            "Samedi": "10h - 12h",
            "Dimanche": "Fermé"
        }
    },
    'ccas': {
        title: "Centre Communal d’Action Sociale",
        content: "Le CCAS de Sèvres vous accompagne dans le monde numérique. Ses formations adaptées aux personnes en situation de handicap, son soutien financier pour l'accès à Internet et ses services en ligne simplifiés sont conçus pour aider toute personne en difficulté.",
        tel: "01 46 21 81 45",
        adresse: "14 rue des Caves du roi, 92310 Sèvres",
        lien: "https://maps.app.goo.gl/NxCXmmys5wkULzKF9",
        site: "https://www.sevres.fr/services/direction-de-la-cohesion-sociale-et-du-ccas/",
        horaires: {
            "Lundi": "13h - 17h30",
            "Mardi": "9h - 12h30 | 13h30 - 17h30",
            "Mercredi": "9h - 12h30 | 13h30 - 17h30",
            "Jeudi": "12h30 - 17h30",
            "Vendredi": "9h - 12h30 | 13h30 - 17h30",
            "Samedi": "Fermé",
            "Dimanche": "Fermé"
        }
    }
};

// Fonction pour mettre à jour le contenu et gérer la classe active
function updateContent(service) {
    // Met à jour le contenu
    // serviceTitle.textContent = servicesDetails[service].title;
    serviceContent.textContent = servicesDetails[service].content;
    serviceTel.textContent = servicesDetails[service].tel.replace(/\s/g, '.'); // Remplace les espaces par des points
    serviceTel.href = `tel:${servicesDetails[service].tel.replace(/\s/g, '')}`; // Supprime les espaces
    serviceAdresse.textContent = servicesDetails[service].adresse;
    serviceAdresse.href = servicesDetails[service].lien;
    serviceImage.src = `assets/brands/bg/${service}.png`;
    serviceSite.href = servicesDetails[service].site;

    // Met à jour les horaires
    lundi.innerHTML = servicesDetails[service].horaires["Lundi"].replace('|', '<br>');
    mardi.innerHTML = servicesDetails[service].horaires["Mardi"].replace('|', '<br>');
    mercredi.innerHTML = servicesDetails[service].horaires["Mercredi"].replace('|', '<br>');
    jeudi.innerHTML = servicesDetails[service].horaires["Jeudi"].replace('|', '<br>');
    vendredi.innerHTML = servicesDetails[service].horaires["Vendredi"].replace('|', '<br>');
    samedi.innerHTML = servicesDetails[service].horaires["Samedi"].replace('|', '<br>');
    dimanche.innerHTML = servicesDetails[service].horaires["Dimanche"].replace('|', '<br>');

    //Si foreach fermé on ajoute la classe .ferme
    let jours = [lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche];
    jours.forEach(jour => {
        if (jour.textContent === "Fermé") {
            jour.classList.add('ferme');
        } else {
            jour.classList.remove('ferme');
        }
    });

    // Gère la classe active
    serviceLogos.forEach(logo => {
        logo.classList.remove('active');
    });
    // document.getElementsByClassName(`services-title`)[0].classList.remove('escale', 'mediatheque', 'maison-famille', 'ccas');
    document.getElementById(`${service}-logo`).classList.add('active');
    // document.getElementsByClassName(`services-title`)[0].classList.add(`${service}`);

    if (service === 'escale' || service === 'mediatheque') {
        document.getElementById('services-content-box').classList.remove('reverse');
    }
    else {
        document.getElementById('services-content-box').classList.add('reverse');
    }
}

// Attache des écouteurs d'événements à chaque logo
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('escale-logo').addEventListener('click', function () {
        updateContent('escale');
        carouselClicked = true;
    });

    document.getElementById('mediatheque-logo').addEventListener('click', function () {
        updateContent('mediatheque');
        carouselClicked = true;
    });

    document.getElementById('maison-famille-logo').addEventListener('click', function () {
        updateContent('maison-famille');
        carouselClicked = true;
    });

    document.getElementById('ccas-logo').addEventListener('click', function () {
        updateContent('ccas');
        carouselClicked = true;
    });

    // Définir le contenu initial et la classe active
    updateContent('escale');
});


// Défilement automatique des services toutes les 3 secondes
let i = 0;
setInterval(() => {
    if (document.querySelector('.services-container:hover') || carouselClicked === true) {
        return;
    } else {
        i++;
        if (i > 3) {
            i = 0;
        }
        updateContent(Object.keys(servicesDetails)[i]);
    }
}, 3000);


// Smooth scroll vers les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});