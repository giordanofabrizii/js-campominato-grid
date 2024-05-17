const campoContainerEl = document.getElementById("campo-container");

let numberOfCell = 100;

const playButton = document.getElementById("start-game");
playButton.addEventListener('click', function(){
    // prima svuoto il container
    campoContainerEl.innerHTML = ''

    // genero le celle al click del play
    for (let i = 1; i < numberOfCell + 1; i++) {
        let article = document.createElement("article");
        article.append(i);
        article.classList.toggle("cella");
        campoContainerEl.appendChild(article);
    }
});