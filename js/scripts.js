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
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.innerHTML = i;

            // Quando l'utente clicca su ogni cella
            cell.addEventListener('click', function () {
                if (bombs.includes(i)) {
                    this.style.backgroundColor = 'red';
                    alert(`Hai perso! il tuo punteggio è: ${score}`);
                    // Disabilitare ulteriori clic sulle celle
                    gridcontainer.style.pointerEvents = 'none';
                } else {
                    if (!this.classList.contains('cell-hover')) {
                        this.classList.add('cell-hover');
                        this.style.backgroundColor = 'lightblue';
                        score++;
                        // Verificare se tutte le celle non-bomba sono state rivelate
                        if (score === (100 - bombs.length)) {
                            alert(`Hai vinto! il tuo punteggio è: ${score}`);
                            gridcontainer.style.pointerEvents = 'none';
                        }
                    }
                }


                //stampo il contenuto delle celle in console una volta cliccata
                console.log(cell.textContent);
            });
            //aggiungo gli elementi cioè le celle all HTML
            document.querySelector('.grid-container').append(cell);
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