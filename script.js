var listeSitesVisible = false;

function afficherSites(nomProjet) {
    // Liens et images associés à chaque projet
    var sites = {
        "Projet 1": {
            lien: "https://www.thinglink.com/card/1799086169103794853",
            image: "site 01.jpg" // Remplacez par le chemin réel de l'image
        },
        "Projet 2": {
            lien: "https://www.thinglink.com/card/1799390761565815461",
            image: "site 02.jpg"
        },
        "Projet 3": {
            lien: "https://www.thinglink.com/card/1799370984260633253",
            image: "site 03.jpg"
        },
        "Projet 4": {
            lien: "https://www.thinglink.com/card/1799399712999080613",
            image: "site 04.jpg"
        },
        "Projet 5": {
            lien: "https://www.thinglink.com/card/1803773242251411942",
            image: "site 05.jpg"
        }
    };

    var listeSites = document.getElementById("listeSites");

    if (listeSitesVisible) {
        listeSites.innerHTML = ""; // Masquer la liste des sites
    } else {
        for (var projet in sites) {
            if (sites.hasOwnProperty(projet)) {
                var li = document.createElement("li");
                var a = document.createElement("a");
                var img = document.createElement("img");

                a.href = sites[projet].lien;
                a.textContent = projet;

                img.src = sites[projet].image;
                img.alt = projet + " Image"; // Remplacez par la description appropriée de l'image

                li.appendChild(img);
                li.appendChild(a);
                li.classList.add("projet-inline"); // Ajout de la classe pour l'affichage en ligne
                listeSites.appendChild(li);
            }
        }
    }

    // Inverser l'état de la liste des sites
    listeSitesVisible = !listeSitesVisible;
}
