// Variable de récupération des IDs HTML
var weekend = document.getElementById("weekend");
var nature = document.getElementById("nature");
var saisonnier = document.getElementById("saisonnier");
var h3 = document.getElementById("h3");
var listeformule = document.getElementById("listeformule");
var formule1 = document.getElementById("formule1");

// Création de mes éléments <li>
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

// Attribution des IDs aux éléments <li>
li1.id = "liweekend";
li2.id = "linature";
li3.id = "lisaisonnier"

// Attribution d'une classe aux éléments <li>
li1.className = "liste";
li2.className = "liste";
li3.className = "liste";

// Création des éléments <img> // Image illustratives
var img1 = document.createElement("img");
var img2 = document.createElement("img");
var img3 = document.createElement("img");

// Attribution des IDs aux éléments <img>
img1.id = "imgweekend";
img2.id = "imgnature";
img3.id = "imgsaisonnier";

// Attribution d'une classe aux éléments <img>
img1.className = "image";
img2.className = "image";
img3.className = "image";

// Création des éléments <h4> // Titre des formules
var titre1 = document.createElement("h4");
var titre2 = document.createElement("h4");
var titre3 = document.createElement("h4");

// Attribution des IDs aux éléments <h4>
titre1.id = "titre1weekend";
titre2.id = "titre2nature";
titre3.id = "titre3saisonnier";

// Attribution d'une classe aux éléments <h4>
titre1.className = "titre";
titre2.className = "titre";
titre3.className = "titre";

// Création des éléments <p> // Déscription des formules
var description1 = document.createElement("p");
var description2 = document.createElement("p");
var description3 = document.createElement("p");

// Attribution des IDs aux éléments <p>
description1.id = "description1weekend";
description2.id = "description2nature";
description3.id = "description3saisonnier";

// Attribution d'une classe aux éléments <p>
description1.className = "description";
description2.className = "description";
description3.className = "description";

// Première formule
img1.src = "https://www.lelovt.com/wp-content/uploads/nuit-love-lovt-e1525816209428.jpg"; // Source de l'image
li1.appendChild(img1); // Mon image devient l'enfant de ma section "weekend"
var title1 = document.createTextNode("Week-end d'amour"); // Création du contenu de mon élément <h4>
titre1.appendChild(title1); // Mon contenu devient l'enfant de mon élément <h4>
li1.appendChild(titre1); // Mon élément <h4> devient l'enfant de ma section "weekend"
// Création du contenu de mon élément <p>
var descriptions1 = document.createTextNode("Le Week-end d'amour vous permet de venir en amoureux dans une chambre pour 2 personnes, avec petit déjeuner \"lover\" servit au lit. Cette formule vous permet de bénéficier d'une réduction de 10 % sur le nombre total de nuitées.");
description1.appendChild(descriptions1); // Mon contenu devient l'enfant de mon élément <p>
li1.appendChild(description1); // Mon élément <p> devient l'enfant de ma section "weekend"
listeformule.appendChild(li1); // Mon élément <li> devient l'enfant de mon élément <ul>

// Deuxième formule
img2.src = "https://www.raynaldethien.fr/Lozere/Causse_Changefege_9_1.jpg";
li2.appendChild(img2);
var title2 = document.createTextNode("Nature et découverte");
titre2.appendChild(title2);
li2.appendChild(titre2);
var descriptions2 = document.createTextNode("Cette formule vous propose une fabuleuse escapade, \"rahan\", en terre du Gévaudan, ainsi qu'une réduction de 5 % sur la totalité du séjour. Elle est disponible pour tous les espaces et lorsque votre séjour dépasse les 5 nuitées. Un trés joli coutelas vous sera offert avec cette formule.");
description2.appendChild(descriptions2);
li2.appendChild(description2);
listeformule.appendChild(li2);

// Troisième formule
img3.src ="https://fr.toluna.com/dpolls_images/2017/07/31/41071a2d-fce1-403b-a11b-48a6f5116628_x365.jpg";
li3.appendChild(img3);
var title3 = document.createTextNode("Travail Saisonnier");
titre3.appendChild(title3);
li3.appendChild(titre3);
var descriptions3 = document.createTextNode("Vous êtes travailleur saisonnier ? Pour une réservation d'un mois minimum pendant les saisons (de Juin à Août et de Décembre à Mars), vous bénéficiez d'une réduction de 20 % sur la totalité de votre séjour. Cette formule est disponible pour tous les espaces.");
description3.appendChild(descriptions3);
li3.appendChild(description3);
listeformule.appendChild(li3);