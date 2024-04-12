# Carousel

## Text of the exercise
Dato un array di oggetti letterali con:
- url dell'immagine
- titolo
- descrizione 
Creare un carosello come nella foto allegata.

Milestone 1:
Nel markup allegato rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva con i relativi titolo e testo diventerà visibile.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

## Solution

### FUNCTIONS

- [x] Define *function(printTitleOnDisplay)*
    - [x] Define *constant* for display div HTMLelement. (displayDivElem)
    - [x] Print on (displayDivElem) the attributes of (printTitleOnDisplay).

### DATA COLLECTION

- [x] Define *constant* for array of objects Titles. (gamesTitles)

#### Elements in DOM

- [x] Define *constant* for Previous Button element. (previousButton)
- [x] Define *constant* for Next Button element. (nextButton)

### LOGICAL EXECUTION

- [x] **FOR EACH** object element of the array (gamesTitles)
    - [x] Invoke function(printTitleOnDisplay)

- [x] Define *constant* for Carousel Item DOM element. (previousButton)

- [x] Define *variable* for Active Index. (activeIndex)

- [x] **ADD EVENT** *click* on (previousButton)
    - [x] **ADD EVENT** *click* on (previousButton)

