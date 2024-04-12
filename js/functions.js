/**
 * Description: function prints title
 * @param {object} titleToPrintOnDisplay
 */
function printTitleOnDisplay(titleToPrintOnDisplay) {

    const displayDivElem = document.getElementById("my-carousel-images");

    displayDivElem.innerHTML = `
        <div class="my-carousel-item active" carousel-item="1">

            <img class="img-fluid" src="./img/01.webp" alt="Marvel's Spiderman Miles Morale picture" />

            <div class="item-description px-3">
                <h2>Marvel's Spiderman Miles Morale</h2>
                <p>
                Experience the rise of Miles Morales as the new hero
                masters incredible, explosive new powers to become his own
                Spider-Man.
                </p>
            </div>

        </div>
    `;
};