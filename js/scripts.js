//uso un bottone per generare la griglia
document.addEventListener('DOMContentLoaded', function () {
 const startButton = document.getElementById('start-button');

    startButton.addEventListener('click', function () {
    const gridcontainer = document.getElementById('grid-container');
    console.log('cliccato');

    // Puliamo il contenitore della griglia prima di creare nuove celle
    gridcontainer.innerHTML = '';

    // Generare 16 numeri casuali unici per le bombe
    const bombs = generateBombs(16, 1, 100);
    console.log('Bombs:', bombs);

    // Tenere traccia del punteggio
    let score = 0;

    //creo un ciclo e crea le celle
    for (let i = 1; i <= 100; i++) {
        const Element = document.createElement('div');
        Element.classList.add('cell');
        Element.innerHTML = i;
        //Quando l'utente clicca su ogni cella, la cella cliccata si colora di LIGHTCORAL ed emetto un messaggio in console con il numero della cella cliccata.

        Element.addEventListener('click', function () {
            Element.classList.toggle('cell-hover');

            //stampo il contenuto delle celle in console una volta cliccata
            console.log(Element.textContent);
        });
        //aggiungo gli elementi cioè le celle all HTML
        document.querySelector('.grid-container').append(Element);
     }
  });
});



//funzione per generare le bombe 
function generateBombs(numberOfBombs, min, max) {
    const bombs = [];
    while (bombs.length < numberOfBombs) {
        const bomb = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }
    }
    return bombs;
}