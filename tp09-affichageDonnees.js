function donneesPays(){
fetch ("https://countriesnow.space/api/v0.1/countries/capital")
    .then (function(res) { 
        return res.text ();
    })
    .then (function(text) {
        let donnee = JSON.parse(text);
        console.log(donnee.data);
        let donneeEmplacementPays = document.querySelector("#donneePays");
        let donneeEmplacementCapitale = document.querySelector("#donneeCapitale");
        let donneeEmplacementPopulation = document.querySelector("#donneePopulation");
        let donneeEmplacementRegion = document.querySelector("#donneeRegion");
        let affichage =""
        for (let i=0 ; i<donnee.data.length ; i++) { 
            let nomPays = donnee.data[i].name;
            affichage = affichage + nomPays + "<br>";
        } return donneeEmplacementPays.innerHTML = affichage;    
    }) ;
    
}
