function moyenne(tableau){
    let somme = 0;
    if (tableau.length === 0) {
        return 0;
    } else {
        for (let i=0 ; i < tableau.length ; i++) {
            if (typeof tableau[i] === "number") {
            somme = somme + tableau[i];
            } else {
                return console.log("Erreur, une valeur n'est pas un nombre");
                }
            }
    }
 return somme / tableau.length;
}

console.log(moyenne([12,12,25]));