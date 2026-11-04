

function triMaxMin(){
    let min = document.querySelector("#min").value;
    let max = document.querySelector("#max").value;
    let messageErreur = document.querySelector("#messageErreur");
    if (min === "") {
        return min = 0;
    }
    if (max === "") {
        return max = Number.MAX_VALUE;
    }
    if( min < 0 || max < 0) {
        return messageErreur.innerHTML = "Veuillez renseigner des valeurs positives"
    } else if (min > max){
        return messageErreur.innerHTML = "Min > Max, veuillez choisir une autre valeur pour min";
    } else {
        return filtrer()
    }
}

function initialiserDonnees(){
    fetch ("https://digicode.cleverapps.io/json/pays/pollution")
    .then(function(reponse) {
        return reponse.json();
    })
    .then(function(data){
        console.log(data);
        initialiserHtml(data);
    });
}

function initialiserHtml(data){
    let h1 = document.querySelector("#titre");
    let h2 = document.querySelector("#annee");
    let corps = document.querySelector("#corps");

    h1.innerHTML = data.polluant+" " +data.unite;
    h2.innerHTML = data.annee;

    let texte ="";
    for (let i=0; i<data.pays.length; i++) {
        let pays = data.pays[i];
        texte+=`<tr><td><img src="https://flagcdn.com/24x18/${pays.code}.png"></td>
                <td>${pays.nom}</td>
                <td>${pays.valeur}</td>
                <td>${pays.pourcentage} %</td></tr>`;
    }
    corps.innerHTML=texte;
}

function filtrer() {
    let texte ="";
    for (let i=min; i<=max; i++) {
        let pays = data.pays[i];
        texte+=`<tr><td><img src="https://flagcdn.com/24x18/${pays.code}.png"></td>
                <td>${pays.nom}</td>
                <td>${pays.valeur}</td>
                <td>${pays.pourcentage} %</td></tr>`;
    }
    corps.innerHTML=texte;
} 


