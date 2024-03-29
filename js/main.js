const serviceTitle = document.querySelector('.services-title');
const serviceContent = document.querySelector('.services-body');
const serviceTel = document.getElementById('service-tel');
const serviceAdresse = document.getElementById('service-adresse');
const serviceSite = document.getElementById('service-site');
const serviceLogos = document.querySelectorAll('.services-logo');
const serviceImage = document.querySelector('.services-image');

// Informations fictives pour chaque service
const servicesDetails = {
    'escale': {
        title: "L'Esc@le",
        content: "L'Escale est un lieu d’aide pour les jeunes sur le développement numérique au sein de la ville de Sèvres.",
        tel: "01 41 14 12 20",
        adresse: "7 Sent. Brezin, 92310 Sèvres",
        lien: "https://maps.app.goo.gl/wd69jPMewWUSAwJY8",
        site: "https://www.sevres.fr/lescale"
    },
    'mediatheque': {
        title: "Médiathèque de Sèvres",
        content: "La médiathèque de Sèvres s'engage dans le numérique en offrant un accès à des ressources en ligne, des ateliers sur les nouvelles technologies, et en intégrant des espaces numériques pour répondre aux besoins contemporains des utilisateurs.",
        tel: "01 41 14 12 13",
        adresse: "8 Rue de ville d'Avray, 92310 Sèvres",
        lien: "https://maps.app.goo.gl/rJWsF3CqCrWh9zms6",
        site: "https://mediatheque.sevres.fr/"
    },
    'maison-famille': {
        title: "La Maison de la Famille",
        content: "En plus de sa structure initiale, la maison de la famille offrira aux Sévriens une structure comprenant Sèvres services, similaire au dispositif France service, afin de désengorger les structures des démarches administratives liées à la reconnaissance des droits.",
        tel: "01 45 07 21 38",
        adresse: "64 Rue des Binelles, 92310 Sèvres",
        lien: "https://maps.app.goo.gl/AYiT82Lmm1BvdeBU7",
        site: "https://www.maisondelafamille-sevres.org/"
    },
    'ccas': {
        title: "Centre Communal d’Action Sociale",
        content: "Le Centre Communal d'Action Publique de Sèvres s'adapte au numérique en facilitant l'accès en ligne à ses services et surtout en mettant en place des formations d'utilisation numérique adaptées aux personnes en situation de handicap.",
        tel: "01 46 21 81 45",
        adresse: "14 rue des Caves du roi, 92310 Sèvres",
        lien: "https://maps.app.goo.gl/NxCXmmys5wkULzKF9",
        site: "https://www.sevres.fr/services/direction-de-la-cohesion-sociale-et-du-ccas/"
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


document.addEventListener('DOMContentLoaded', function () {
    // Attache des écouteurs d'événements à chaque logo
    document.getElementById('escale-logo').addEventListener('click', function () {
        updateContent('escale');
    });

    document.getElementById('mediatheque-logo').addEventListener('click', function () {
        updateContent('mediatheque');
    });

    document.getElementById('maison-famille-logo').addEventListener('click', function () {
        updateContent('maison-famille');
    });

    document.getElementById('ccas-logo').addEventListener('click', function () {
        updateContent('ccas');
    });

    // Définir le contenu initial et la classe active
    updateContent('escale');
});

// every 3s update content but NOT RANDOMLY !!!!!! make it in order
// let i = 0;
// setInterval(() => {
//     //if hover on container, stop the interval
//     if (document.querySelector('.services-container:hover')) {
//         return;
//     } else {
//         i++;
//         if (i > 3) {
//             i = 0;
//         }
//         updateContent(Object.keys(servicesDetails)[i]);
//     }


// }, 3000);


// Smooth scroll vers les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});