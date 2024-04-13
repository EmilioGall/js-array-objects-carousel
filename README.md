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
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso sinistra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso destra.

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

- [x] Define *function(activeClassOnActiveIndex)*
    - [x] Add class "active" to array element (arrayElemToActivate) with Active Index (triggerIndex).

- [x] Define *function(activeClassOffActiveIndex)*
    - [x] Remove class "active" to array element (arrayElemToActivate) with Active Index (triggerIndex).

### LOGICAL EXECUTION

- [x] Define *constant* for array of objects Titles. (gamesTitles)

- [x] **FOR EACH** object element of the array (gamesTitles)
    - [x] Invoke function(printTitleOnDisplay)

- [x] Define *constant* for Previous Button element. (previousButton)
- [x] Define *constant* for Next Button element. (nextButton)

- [x] Define *variable* for Active Index. (activeIndex)

- [x] Define *constant* for Carousel Item DOM element. (carouselItemArrayElem)

- [x] Invoke function(activeClassOnActiveIndex) of (carouselItemArrayElem)

- [x] Define *constant* for Thumbnails Item DOM element. (thumbnailsItemArrayElem)

- [x] Invoke function(activeClassOnActiveIndex) of (thumbnailsItemArrayElem)

- [x] **ADD EVENT** *click* on (nextButton)
    - [x] Invoke function(activeClassOffActiveIndex) of (carouselItemArrayElem)
    - [x] Invoke function(activeClassOffActiveIndex) of (thumbnailsItemArrayElem)
    - [x] **IF** (activeIndex < gamesTitles.length-1)
        - [x] Increment Active Index.
    - [x] **ELSE**
        - [x] Set Active Index to 0.
    - [x] Invoke function(activeClassOnActiveIndex) of (carouselItemArrayElem)
    - [x] Invoke function(activeClassOnActiveIndex) of (thumbnailsItemArrayElem)

- [x] **ADD EVENT** *click* on (previousButton)
    - [x] Invoke function(activeClassOffActiveIndex) of (carouselItemArrayElem)
    - [x] Invoke function(activeClassOffActiveIndex) of (thumbnailsItemArrayElem)
    - [x] **IF** (activeIndex > 0)
        - [x] Decrement Active Index.
    - [x] **ELSE**
        - [x] Set Active Index to gamesTitles.length-1.
    - [x] Invoke function(activeClassOnActiveIndex) of (carouselItemArrayElem)
    - [x] Invoke function(activeClassOnActiveIndex) of (thumbnailsItemArrayElem)


