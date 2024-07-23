//uso un bottone per generare la griglia
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function () {
    const gridcontainer = document.getElementById('grid-container');
    console.log('cliccato');
    //creo un ciclo che prenda il numero inserito dall'utente e crea le celle
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
