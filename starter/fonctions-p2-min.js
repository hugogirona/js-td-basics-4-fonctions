/*
FONCTIONS - PRÉPA 2 : Le minimum de deux nombres
1. En supposant que la fonction JavaScript Math.min() n'existe pas,
   déclarez la fonction calcMin pour qu'elle retourne
   le plus petit des deux nombres passés en paramètres
2. Utilisez ensuite votre fonction pour calculer
   - le minimum entre 4.5 et 5
   - le minimum entre 19 et 9
   - le minimum entre 1 et 1
N.B. Faites deux versions :
   - en utilisant la syntaxe classique
   - en utilisant une arrow function
*/

// Syntaxe classique
calculMin = function (x, y) {
    if (x <= y) {
        console.log(x);
    } else {
        console.log(y);
    }
}

// Utilisation de la fonction calcMin pour calculer le minimum
calculMin(10, 5);

// Version avec une arrow function
const calcMinArrow = (x, y) => {
    if (x <= y) {
        console.log(x);
    }else{
        console.log(y);
    }
}
// Utilisation de la fonction calcMinArrow pour calculer le minimum
calcMinArrow(14, 7);

// Version encore plus concise avec une arrow function
const calcMinConcise = (a, b) => (a < b) ? console.log(a): console.log(b);

// Utilisation de la fonction calcMinConcise pour calculer le minimum

calcMinConcise(10, 12);