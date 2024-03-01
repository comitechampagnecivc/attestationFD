function afficherZD() {
    var numeroRecoltant = document.getElementById("numero_recoltant").value;
    var resultat = document.getElementById("resultat");
    resultat.innerHTML = "";

    var found = false;
    data.forEach(item => {
        if (item["numero recoltant"] === numeroRecoltant) {
            for (var key in item) {
                if (key !== "numero recoltant" && item[key] === "1") {
                    resultat.innerHTML += key + ", ";
                }
            }
            found = true;
        }
    });
    if (!found) {
        resultat.innerHTML = "Aucun récoltant trouvé avec ce numéro";
    } else if (resultat.innerHTML === "") {
        resultat.innerHTML = "Aucun ZD trouvé pour " + numeroRecoltant;
    }
}