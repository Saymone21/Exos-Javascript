let objetLitteral = {
    afficher : function(a,b) {
        return {
        somme : a + b,
        soustraction : a - b,
        multiplication : a * b,
        division : a / b,
        }
    }
}

console.log(objetLitteral.afficher(500,1000));