const campoContainerEl = document.getElementById("campo-container");

let difficolta = "hard"

// genero le celle al click del play
const playButton = document.getElementById("start-game");
playButton.addEventListener('click', function(){
    console.log(difficolta)
});