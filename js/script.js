const campoContainerEl = document.getElementById("campo-container");

let numberOfCell = 100;

const playButton = document.getElementById("start-game");
playButton.addEventListener('click', function(){
    // prima svuoto il container
    campoContainerEl.innerHTML = ''

    // genero le celle al click del play
    for (let i = 1; i < numberOfCell + 1; i++) {
        let article = document.createElement("article");
        article.innerHTML = `<p>${i}</p>`
        article.classList.toggle("cella");
        campoContainerEl.appendChild(article);

        article.addEventListener('click', function(){
            article.classList.toggle("active");
        });
    }
});