// function affiche image
function affiche_image(tab) {
    // on change l'atribut image et on modifie le titre
    image.setAttribute('src', src + slides[tab].image);
    image.setAttribute('alt', slides[tab].tagLine);
    titre.innerHTML = slides[tab].tagLine;
    return;
}

// function update_dot()
function update_dot(tab) {
    // on afficher dot selected

    for (let index = 0; index < myDot.length; index++) {
        //console.log(myDot[i])
        myDot[index].classList.remove('dot_selected')

    }

    // on ajoute au numeros de tab le dot_selected
    myDot[tab].classList.add('dot_selected')
}

// function fleche droite
function fleche_droite() {
    // on parcours le tableau slides
    for (let i = 0; i < slides.length; i++) {
        /*console.log(slides[i].tagLine);
        console.log(image.alt);
        console.log(i)*/
        // on incremente tab
        tab++  // tab =  + 1 a chaque passage
        // pour evitez l'erreur d'index 
        if (tab < 0 || tab >= slides.length) {
            // a la fin du tableau on enleve 4-1 on remet tab a 3
            tab = 0;
            // on change l'atribut image et on modifie le titre
            affiche_image(tab);
            //update_dot
            update_dot(tab);
            break;

        } else {
            // on change l'atribut image et on modifie le titre
            affiche_image(tab);

            //update_dot
            update_dot(tab);
            // on bloque l'execution 
            break;
        }

    }
}

//function fleche gauche
function fleche_gauche() {

    // on parcours le tableau slides
    for (let i = 0; i < slides.length; i++) {
        /*console.log(slides[i].tagLine);
        console.log(image.alt);
        console.log(i)*/
        // pour evitez l'erreur d'index 
        if (tab <= 0) {
            // on change l'atribut image et on modifie le titre
            tab = slides.length - 1;
            affiche_image(tab);
            //update_dot
            update_dot(tab);
            return;
        }

        if (tab != 0) {

            // on incremente tab
            tab--  // tab =  + 1 a chaque passage

            // on change l'atribut image et on modifie le titre
            affiche_image(tab);
            //update_dot
            update_dot(tab);
            // on bloque l'execution 
            break;

        }
    }

}


