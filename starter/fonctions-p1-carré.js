/*
FONCTIONS - PRÉPA 1 : Le carré d'un nombre
1. a) Déclarez la fonction carre1() avec la syntaxe normale
      pour qu'elle calcule et renvoie le carré du nombre passé en paramètre
   b) Utilisez ensuite cette fonction pour afficher dans la console
	  - le carré de 0
	  - le carré de 2
	  - le carré de 5
2. a) Déclarez la fonction carre2() avec la syntaxe d'une arrow fonction (ES6)
      pour qu'elle calcule et renvoie le carré du nombre passé en paramètre
   b) Utilisez ensuite cette fonction pour afficher dans la console
	  - le carré de 0
	  - le carré de 2
	  - le carré de 5
*/

// Déclarer carre1 pour qu'elle retourne le carré de x
const carre1 = function (x) {
    console.log(`${x} au carré = ${x*x}`);
}

// Calculer le carré de 0, 2 et 5 en utilisant carre1

carre1(0);
carre1(2);
carre1(5);

// Déclarer carre2 (en utilisant une fonction fléchée) pour qu'elle retourne le carré de x

carre2 = x => console.log(`${x} au carré = ${x*x}`);


// Calculer le carré de 0, 2 et 5 en utilisant carre2

carre2(0);
carre2(2);
carre2(5);