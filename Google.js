let societe = {
 "Nom":"Google",
 "AdresseSiege":{
    "batiment":"Googleplex",
    "Region":"Mountain View",
    "Etat":"California",
    "Pays":"United States"},
 "Fondateurs":[
   {"Nom":"Larry Page",
   "dateNaissance":"26/03/1973",
   "LieuNaissance":"East Lansing",
   "EtatNaissance":"Michigan"},
   {"Nom":"Sergey Brin",
      "dateNaissance":"21/08/1973",
      "LieuNaissance":"Moscou",
      "EtatNaissance":"Union Soviétique"}],
 "chiffreAffaire":[
   {"Annee":2008,"CA":16.49},
   {"Annee":2012,"CA":37.97},
   {"Annee":2016,"CA":89.46},
   {"Annee":2018,"CA":136.2}]
};

for (let i = 0; i < societe.Fondateurs.length; i++){
    console.log(societe.Fondateurs[i].Nom);
}

for (let i = 0; i < societe.chiffreAffaire.length; i++){
    console.log(societe.chiffreAffaire[i].CA);
}
  
