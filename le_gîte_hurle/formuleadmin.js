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

// Création des éléments <button> "modifier"
var btnmodifier1 = document.createElement("button");
var btnmodifier2 = document.createElement("button");
var btnmodifier3 = document.createElement("button");

// Attribution des IDs aux éléments <button> "modifier"
btnmodifier1.id = "modifier1weekend";
btnmodifier2.id = "modifier2nature";
btnmodifier3.id = "modifier3saisonnier";

// Attribution d'une classe aux éléments <button> "modifier"
btnmodifier1.className = "modifier";
btnmodifier2.className = "modifier";
btnmodifier3.className = "modifier";

// Création des éléments <button> "supprimer"
var btnsupprimer1 = document.createElement("button");
var btnsupprimer2 = document.createElement("button");
var btnsupprimer3 = document.createElement("button");

// Attribution des IDs aux éléments <button> "supprimer"
btnsupprimer1.id = "supprimer1weekend";
btnsupprimer2.id = "supprimer2nature";
btnsupprimer3.id = "supprimer3saisonnier";

// Attribution d'une classe aux éléments <button> "supprimer"
btnsupprimer1.className = "supprimer";
btnsupprimer2.className = "supprimer";
btnsupprimer3.className = "supprimer";

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
li1.appendChild(btnmodifier1).innerHTML = "Modifier"; // Mon élément <button> "modifier" devient l'enfant de ma section "weekend" et je lui met le contenu "Modifier" dedans
li1.appendChild(btnsupprimer1).innerHTML = "Supprimer"; // Mon élément <button> "supprimer" devient l'enfant de ma section "weekend" et je lui met le contenu "supprimer" dedans
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
li2.appendChild(btnmodifier2).innerHTML = "Modifier";
li2.appendChild(btnsupprimer2).innerHTML = "Supprimer";
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
li3.appendChild(btnmodifier3).innerHTML = "Modifier";
li3.appendChild(btnsupprimer3).innerHTML = "Supprimer";
listeformule.appendChild(li3);


btnsupprimer1.addEventListener("click", supprimer1);        //Evenement qui permet au "click" de faire la fonction "supprimer1"
btnsupprimer2.addEventListener("click", supprimer2);
btnsupprimer3.addEventListener("click", supprimer3);


// Ajout d'une formule
function ajouter(){
var imgajout = document.getElementById("imgajout").value;   // Récupération de la valeur de mon élément <input> "imgajout"
var titreajout = document.getElementById("titreajout").value; // Récupération de la valeur de mon élément <input> "titreajout"
var descriptionajout = document.getElementById("descriptionajout").value; // Récupération de la valeur de mon élément <textarea> "descriptionajout"
    if(imgajout == "" || titreajout == "" || descriptionajout == ""){ // Condition qui met une alert si les champs ne sont pas remplis
        alert("Veuillez remplir les champs s'il vous plait")
    }else{
        var li = document.createElement("li");                     // Création de mon élément <li> à ajouter
        var imgajouter = document.createElement("img");             // Création de l'élément <img> à ajouter
        var titreajouter = document.createElement("h4");            // Création de mon élément <h4>                 
        var descriptionajouter = document.createElement("p");       // Création de l'élément <p> à ajouter
        var btnmodifierajouter = document.createElement("button");  // Création de mon élément <button> "modifier" à ajouter
        var btnsupprimerajouter = document.createElement("button"); // Création de mon élément <button> "supprimer"
        imgajouter.className = "image";
        titreajouter.className = "titre";
        descriptionajouter.className = "description";
        imgajouter.src = imgajout;                                  // Met la valeur de ma variable "imgajout" comme source de l'image
        li.appendChild(imgajouter);                                 // L'image devient l'enfant de mon élément <li>
        var titleajouter = document.createTextNode(titreajout);     // Création du contenu à mettre comme "titre" en récupérant la valeur de ma variable "titreajout"
        titreajouter.appendChild(titleajouter);                     // Mise du contenu dans mon élément <h4>
        li.appendChild(titreajouter);                               // Mon élément <h4> devient l'enfant de mon élément <li>
        var descriptionsajouter = document.createTextNode(descriptionajout); // Création du contenu à mettre comme "description" en récupérant la valeur de ma variable "descriptionajout"
        descriptionajouter.appendChild(descriptionsajouter);        // Mise du contenu dans mon élément <p>
        li.appendChild(descriptionajouter);                         // Mon élément <p> devient l'enfant de mon élément <li>
        li.appendChild(btnmodifierajouter).innerHTML = "Modifier";  // Mon élément <button> "modifier" devient l'enfant de mon élément <li> et je lui met le contenu "Modifier" dedans
        li.appendChild(btnsupprimerajouter).innerHTML = "Supprimer";// Mon élément <button> "supprimer" devient l'enfant de mon élément <li> et je lui met le contenu "supprimer" dedans
        listeformule.appendChild(li);                               // Mon élément <li> devient l'enfant de mon élément <ul>
        document.getElementById("imgajout").value = "";             // Vide mon élément <input> de tous contenu / valeur
        document.getElementById("titreajout").value = "";           // Vide mon élément <input> de tous contenu / valeur
        document.getElementById("descriptionajout").value = "";     // Vide mon élément <textarea> de tous contenu / valeur
    }
        btnsupprimerajouter.addEventListener("click", supprimerajout); //Evenement qui permet au "click" de faire la fonction "supprimer"
        function supprimerajout(){                                      // Fonction qui supprime la formule
            listeformule.removeChild(li);
        }

        btnmodifierajouter.addEventListener("click", modifier); // Evenement qui permet au "click" de faire la fonction "modifier"
        var click = 0;                                          // Variable qui stock le nombre de "click" de l'utilisateur, commence à 0
        
        function modifier(){                                    // Fonction qui permet de modifier une formule

            click1 ++;                                          // Incrémentation du click lorsque l'utilisateur va "clicker" sur le bouton Modifier
            if(click > 1){                                      // Condition qui indique que lorsque l'utilisateur à "clicker" 1 fois, alors la fonction modifier() deviendra nulle
                modifier() == null;
            }else{                                              // Sinon me crée tous mes éléments dont j'ai besoin
            var labelimg = document.createElement("label");     // Crée mon élément <label>
            labelimg.className = "lb1m";
            li.appendChild(labelimg).innerHTML = "Changer l'URL pour modifier l'image : "; // Crée le contenu de mon élément <label>
            var inputimg = document.createElement("input");     // Crée mon élément <input> pour URL
            inputimg.setAttribute("type", "text");              // Donne un attribut et la valeur de l'attribut à mon élément <input>
            inputimg.setAttribute("size", "100");
            inputimg.id = "inputimg";                           // Attribution d'un ID à mon élément <input>
            li.appendChild(inputimg);                           // Mon élement <input> devient l'enfant de mon élément <li>
            var labeltitre = document.createElement("label");
            labeltitre.className = "lb2m";
            li.appendChild(labeltitre).innerHTML = "Changer votre titre : ";
            var inputtitre = document.createElement("input");
            inputtitre.setAttribute("type", "text");
            inputtitre.setAttribute("size", "20");
            inputtitre.id = "inputtitre";
            li.appendChild(inputtitre);
            var labeldescription = document.createElement("label");
            labeldescription.className = "lb3m";
            li.appendChild(labeldescription).innerHTML = "Changer votre description ici : ";
            var inputdescription = document.createElement("textarea");
            inputdescription.id = "inputdescription";
            li.appendChild(inputdescription);
            var btnconfirm = document.createElement("button");  // Création de mon élément <button>
            li.appendChild(btnconfirm).innerHTML = "Confirmer"; // Mon élément <button> devient l'enfant de mon élément <li> et lui met son contenu dedans
        
        function confirmer(){                                   // Fonction pour confirmer la modification
            var inputimgvalue = document.getElementById("inputimg").value;  // Rcupération des valeurs des éléments <input>
            var inputtitrevalue = document.getElementById("inputtitre").value;
            var inputdescriptionvalue = document.getElementById("inputdescription").value;
            imgajouter.src = inputimgvalue;                     // Remplace la source de mon élément <img> créer
            titreajouter.removeChild(titleajouter);             // Enlève le titre éxistant
            titleajouter = document.createTextNode(inputtitrevalue); // Crée le nouveau contenu
            titreajouter.appendChild(titleajouter);             // Met le nouveau contenu dans mon élement <h4>
            descriptionajouter.removeChild(descriptionsajouter);
            descriptionsajouter = document.createTextNode(inputdescriptionvalue);
            descriptionajouter.appendChild(descriptionsajouter);
            li.removeChild(labelimg);                           // Enlève tous mes éléments créer
            li.removeChild(inputimg);
            li.removeChild(labeltitre);
            li.removeChild(inputtitre);
            li.removeChild(labeldescription);
            li.removeChild(inputdescription);
            li.removeChild(btnconfirm);
                }
            btnconfirm.addEventListener("click", confirmer);    // Evenement qui permet au "click" de faire la fonction confirmer(), et du coup de modifier
            }
        }

}

function supprimer1(){                                          //Evenement qui permet au "click" de faire la fonction "supprimer"
    listeformule.removeChild(li1);
}
function supprimer2(){
    listeformule.removeChild(li2);
}
function supprimer3(){
    listeformule.removeChild(li3);
}

btnmodifier1.addEventListener("click", modifier1);
btnmodifier2.addEventListener("click", modifier2);
btnmodifier3.addEventListener("click", modifier3);


var click1 = 0;
var click2 = 0;
var click3 = 0;

function modifier1(){

    click1 ++;
    if(click1 > 1){
        modifier1() == null;
    }else{
    var labelimg = document.createElement("label");
    labelimg.className = "lb";
    li1.appendChild(labelimg).innerHTML = "Changer l'URL pour modifier l'image : ";
    var inputimg = document.createElement("input");
    inputimg.className = "lb";
    inputimg.setAttribute("type", "text");
    inputimg.setAttribute("size", "100");
    inputimg.id = "inputimg";
    li1.appendChild(inputimg);
    var labeltitre = document.createElement("label");
    labeltitre.className = "lb";
    li1.appendChild(labeltitre).innerHTML = "Changer votre titre : ";
    var inputtitre = document.createElement("input");
    inputtitre.className = "lb";
    inputtitre.setAttribute("type", "text");
    inputtitre.setAttribute("size", "20");
    inputtitre.id = "inputtitre";
    li1.appendChild(inputtitre);
    var labeldescription = document.createElement("label");
    labeldescription.className = "lb";
    li1.appendChild(labeldescription).innerHTML = "Changer votre description ici : ";
    var inputdescription = document.createElement("textarea");
    inputdescription.className = "lb";
    inputdescription.id = "inputdescription";
    li1.appendChild(inputdescription);
    var btnconfirm = document.createElement("button");
    li1.appendChild(btnconfirm).innerHTML = "Confirmer";

function confirmer(){
    var inputimgvalue = document.getElementById("inputimg").value;
    var inputtitrevalue = document.getElementById("inputtitre").value;
    var inputdescriptionvalue = document.getElementById("inputdescription").value;
    img1.src = inputimgvalue;
    titre1.removeChild(title1);
    title1 = document.createTextNode(inputtitrevalue);
    titre1.appendChild(title1);
    description1.removeChild(descriptions1);
    descriptions1 = document.createTextNode(inputdescriptionvalue);
    description1.appendChild(descriptions1);
    li1.removeChild(labelimg);
    li1.removeChild(inputimg);
    li1.removeChild(labeltitre);
    li1.removeChild(inputtitre);
    li1.removeChild(labeldescription);
    li1.removeChild(inputdescription);
    li1.removeChild(btnconfirm);
        }
    btnconfirm.addEventListener("click", confirmer);
    }
}

function modifier2(){

    click2 ++;
    if(click2 > 1){
        modifier2() == null;
    }else{
    var labelimg = document.createElement("label");
    labelimg.className = "lb1m";
    li2.appendChild(labelimg).innerHTML = "Changer l'URL pour modifier l'image : ";
    var inputimg = document.createElement("input");
    inputimg.setAttribute("type", "text");
    inputimg.setAttribute("size", "100");
    inputimg.id = "inputimg";
    li2.appendChild(inputimg);
    var labeltitre = document.createElement("label");
    labeltitre.className = "lb2m";
    li2.appendChild(labeltitre).innerHTML = "Changer votre titre : ";
    var inputtitre = document.createElement("input");
    inputtitre.setAttribute("type", "text");
    inputtitre.setAttribute("size", "20");
    inputtitre.id = "inputtitre";
    li2.appendChild(inputtitre);
    var labeldescription = document.createElement("label");
    labeldescription.className = "lb3m";
    li2.appendChild(labeldescription).innerHTML = "Changer votre description ici : ";
    var inputdescription = document.createElement("textarea");
    inputdescription.id = "inputdescription";
    li2.appendChild(inputdescription);
    var btnconfirm = document.createElement("button");
    li2.appendChild(btnconfirm).innerHTML = "Confirmer";

function confirmer(){

        var inputimgvalue = document.getElementById("inputimg").value;
        var inputtitrevalue = document.getElementById("inputtitre").value;
        var inputdescriptionvalue = document.getElementById("inputdescription").value;
        img2.src = inputimgvalue;
        titre2.removeChild(title2);
        title2 = document.createTextNode(inputtitrevalue);
        titre2.appendChild(title2);
        description2.removeChild(descriptions2);
        descriptions2 = document.createTextNode(inputdescriptionvalue);
        description2.appendChild(descriptions2);
        li2.removeChild(labelimg);
        li2.removeChild(inputimg);
        li2.removeChild(labeltitre);
        li2.removeChild(inputtitre);
        li2.removeChild(labeldescription);
        li2.removeChild(inputdescription);
        li2.removeChild(btnconfirm);
            }
        btnconfirm.addEventListener("click", confirmer);
    }
}

function modifier3(){

    click3 ++;
    if(click3 > 1){
        modifier3() == null;
    }else{
    var labelimg = document.createElement("label");
    labelimg.className = "lb1m";
    li3.appendChild(labelimg).innerHTML = "Changer l'URL pour modifier l'image : ";
    var inputimg = document.createElement("input");
    inputimg.setAttribute("type", "text");
    inputimg.setAttribute("size", "100");
    inputimg.id = "inputimg";
    li3.appendChild(inputimg);
    var labeltitre = document.createElement("label");
    labeltitre.className = "lb2m";
    li3.appendChild(labeltitre).innerHTML = "Changer votre titre : ";
    var inputtitre = document.createElement("input");
    inputtitre.setAttribute("type", "text");
    inputtitre.setAttribute("size", "20");
    inputtitre.id = "inputtitre";
    li3.appendChild(inputtitre);
    var labeldescription = document.createElement("label");
    labeldescription.className = "lb3m";
    li3.appendChild(labeldescription).innerHTML = "Changer votre description ici : ";
    var inputdescription = document.createElement("textarea");
    inputdescription.id = "inputdescription";
    li3.appendChild(inputdescription);
    var btnconfirm = document.createElement("button");
    li3.appendChild(btnconfirm).innerHTML = "Confirmer";

function confirmer(){

        var inputimgvalue = document.getElementById("inputimg").value;
        var inputtitrevalue = document.getElementById("inputtitre").value;
        var inputdescriptionvalue = document.getElementById("inputdescription").value;
        img3.src = inputimgvalue;
        titre3.removeChild(title3);
        title3 = document.createTextNode(inputtitrevalue);
        titre3.appendChild(title3);
        description3.removeChild(descriptions3);
        descriptions3 = document.createTextNode(inputdescriptionvalue);
        description3.appendChild(descriptions3);
        li3.removeChild(labelimg);
        li3.removeChild(inputimg);
        li3.removeChild(labeltitre);
        li3.removeChild(inputtitre);
        li3.removeChild(labeldescription);
        li3.removeChild(inputdescription);
        li3.removeChild(btnconfirm);
            }
        btnconfirm.addEventListener("click", confirmer);
    }
}