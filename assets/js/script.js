//index du tableau slides lors des boules pour stock 
//le nombre de passage hors de la boucle
let tab = 0;
//lien image réel pour completer celui du tableau slides
let src = './assets/images/slideshow/';

// bouton fleche 
let arrow_left = document.querySelector("#banner .arrow_left");
let arrow_right = document.querySelector("#banner .arrow_right");
let image = document.querySelector('#banner .banner-img');
let titre = document.querySelector('#banner p');
let banner = document.querySelector('#banner');

//point dots
let dots = document.querySelector("#banner .dots");
//tableau pour stocker tous les dot initialisé
let myDot = [];


// boucle pour initialisé les dot sur la page HTML dans div.dots
// avec creation createElement() d'un div dot 
// + ajout class classList.add() dans dot
// a la fin on ajoute l'enfant dans la div.dots parent avec appenChild()
for (let i = 0; i < slides.length; i++) {

	// je creer un div 
	let dot = document.createElement('div');

	//je creer une class dans cette div
	dot.classList.add('dot');
	//et j'ajoute cette class dans la div dots appeler si haut
	dots.appendChild(dot);

	// on affiche dot-select sur le premier slide 
	if (i === tab) dot.classList.add('dot_selected');

	myDot.push(dot);
	//console.log(myDot);

	//pour le coté finition quand on survol clic bulle
	dot.style.cursor = 'pointer';

}



//console.log(dots);

//console.log(image)

// on modifie le tableau avec le vrai ALT
image.setAttribute('alt', slides[0].tagLine);

// on mets un pointer sur les fleches
arrow_left.style.cursor = "pointer";
arrow_right.style.cursor = "pointer";


// clic gauche
arrow_left.addEventListener('click', fleche_gauche);
// clic droit
arrow_right.addEventListener('click', fleche_droite);

// une boucle pour recuperer l'index du tableau myDot et afficher selon l'index
for (let index = 0; index < myDot.length; index++) {
	//console.log(index)

	myDot[index].addEventListener('click', function () {
		//console.log('click');
		//on recup image tagline dans tableau slides
		affiche_image(index);
		//on fais une mise a jours de la dot 
		//en supprimant tous et afficher uniquement celui selectionner
		update_dot(index)
	});
}