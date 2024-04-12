/**
 * Description: function prints title
 * @param {object} titleToPrintOnDisplay
 */
function printTitleOnDisplay(titleToPrintOnDisplay, indexOfTitle) {

    const displayDivElem = document.querySelector(".my-carousel-images");

    console.log("displayDivElem", displayDivElem);

    displayDivElem.innerHTML += `
        <div class="my-carousel-item active" carousel-item="${indexOfTitle+1}">

            <img class="img-fluid" src="./${titleToPrintOnDisplay.image}" alt="${titleToPrintOnDisplay.title} picture" />

            <div class="item-description px-3">

                <h2>${titleToPrintOnDisplay.title}</h2>

                <p>${titleToPrintOnDisplay.title}</p>
                
            </div>

        </div>
    `;
};