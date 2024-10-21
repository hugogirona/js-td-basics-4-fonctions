/*****************************
 * 021 - Function Statements and Expressions
 */

/*
1. Déclarez, en utilisant une fonction expression, la fonction whatDoYouDo
   prenant deux paramètres, job et firstName. Cette fonction retourne le prénom suivi
   d'une phrase qui décrit le job de la personne pour différents cas de job :
   - si c'est teacher, "teaches kids how to code"
   - si c'est driver, "drives a cab in Lisbon"
   - si c'est designer, "designs beautiful websites"
   - dans tous les autres cas, "does something else"
*/

const whatDoYouDo = function (job, firstName) {
    // Utilisez des conditions (if/else if) pour décrire le job de la personne en fonction de la valeur de 'job'.
    // Renvoyez la phrase appropriée en utilisant un return.
    switch (job) {
        case 'teacher':
            job = "teaches kids how to code.";
            break;
        case 'driver':
            job = "drives a cab in Lisbon.";
            break;
        case 'designer':
            job = "designs beautiful websites."
            break;
            default: job = "does something else.";

    }
    console.log(firstName + ' ' + job);
}

/*
2. Utilisez cette fonction pour afficher dans la console ce que font :
    - John (teacher)
    - Jane (designer)
    - Mark (retired)
*/

whatDoYouDo('teacher','John');
whatDoYouDo('designer','Jane');
whatDoYouDo('retired','Mark');