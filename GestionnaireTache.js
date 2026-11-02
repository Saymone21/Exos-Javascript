function creerGestionnaire(){
    let gestionnaire = {
        taches:[],
        ajouterTache(description){
            let nvTache = {"description": description, 
                           "termine": false};
            this.taches.push(nvTache);
        },
        terminerTache(index){
            this.taches[index].termine = true;
        },
        afficherTaches(){
            console.log(this.taches);
        }
    }
    return gestionnaire;
}

let ges1 = creerGestionnaire();
ges1.afficherTaches();
ges1.ajouterTache("Terminer la correction du TP");
ges1.afficherTaches();
ges1.terminerTache(0);
ges1.afficherTaches();