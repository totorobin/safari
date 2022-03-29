/*************
 * MENU
 * 
 *************/


/**
 * Fonction de filtre
 */
function filtrer(caracteristique) {
	var cartes, i;
	cartes = document.getElementsByClassName("carte");
  
	// itération sur les cartes
	for (i = 0; i < cartes.length; i++) {
		supprimerClasse(cartes[i], "show");
		// Si la carte possede la caracteristique
		if (cartes[i].className.indexOf(caracteristique) > -1)  {
			ajouterClasse(cartes[i], "show");
	}
  }
}

/**
 * Ajoute la classe 'nom' a l'élément 'element' si celle-ci n'est pas présente
 */
function ajouterClasse(element, nom) {
	var i, classes
	classes = element.className.split(" ");
	if (classes.indexOf(nom) == -1) {
		element.className += " " + nom;
	}
}

/**
 * Supprime la classe 'nom' de l'élément 'element' si celle-ci est présente
 */
function supprimerClasse(element, nom) {
  var i, arr1;
  arr1 = element.className.split(" ");
    while (arr1.indexOf(nom) > -1) {
      arr1.splice(arr1.indexOf(nom), 1);     
    }
  element.className = arr1.join(" ");
}


// Ajout de la classe 'active' au bouton sélectionné
var menu = document.getElementById("menu");
var btns = menu.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


filtrer("");