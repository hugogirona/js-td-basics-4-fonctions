/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

// Fonction pour vérifier si une année est bissextile
function isBissextile(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }

    return year % 400 === 0;
}


// Fonction pour vérifier si une date est valide
function isValid(day, month, year) {

    if (day > 0 && month > 0 ) {
        console.log(`voici la date entrée : ${day}/${month}/${year}`);

        let maxDays;

        if (month > 0 && month <= 12) {
            if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
                maxDays = 31;
            } else if (month === 2) {
                if (isBissextile(year)) {
                    maxDays = 29;
                } else {
                    maxDays = 28;
                }
            } else {
                maxDays = 30;
            }
            if (day > 0 && day <= 31) {
                if (day > maxDays) {
                    console.log(`la date ${day}/${month}/${year}} n'est PAS valide.`);
                } else {
                    console.log(`la date ${day}/${month}/${year}} est valide.`);
                }
            } else {
                console.log(`${day} n'est pas une valeur possible pour un jour...`);
            }
        } else {
            console.log(`vous n'avez pas saisi une entrée valide. Les mois se comptent de 1 à 12.`);
        }

    } else {
        console.log(`La date n'est pas valide`);
    }

}

// Demander à l'utilisateur de saisir une date

isValid(prompt('Entrez un jour'), prompt('Entrez un mois'), prompt('Entrez une année'));
// Utilisation de la fonction isValid pour vérifier la date

