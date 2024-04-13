/**
 * Description: function prints title in display DOM element.
 * @param {object} titleToPrintOnDisplay
 */
function printTitleOnDisplay(titleToPrintOnDisplay, indexOfTitle) {

    // Define *constant* for Carousel Display DOM Element.
    const displayDivElem = document.querySelector(".my-carousel-images");

    // console.log("displayDivElem", displayDivElem);

    // Print on (displayDivElem) the attributes of (printTitleOnDisplay).
    displayDivElem.innerHTML += `
        <div class="my-carousel-item" carousel-item="${indexOfTitle+1}">

            <img class="img-fluid" src="./${titleToPrintOnDisplay.image}" alt="${titleToPrintOnDisplay.title} picture" />

            <div class="item-description px-3">

                <h2>${titleToPrintOnDisplay.title}</h2>

                <p>${titleToPrintOnDisplay.title}</p>
                
            </div>

        </div>
    `;

};

/**
 * Description: function prints title in thumbnails DOM element.
 * @param {object} titleToPrintOnThumbnails
 */
function printTitleOnThumbnails(titleToPrintOnThumbnails) {

    // Define *constant* for Carousel Thumbnails DOM Element.
    const thumbnailsDivElem = document.querySelector(".my-thumbnails");

    // console.log("thumbnailsDivElem", thumbnailsDivElem);

    // Print on (thumbnailsDivElem) the attributes of (printTitleOnThumbnails).
    thumbnailsDivElem.innerHTML += `
    <img class="img-fluid my-thumbnail" src="./${titleToPrintOnThumbnails.image}" alt="${titleToPrintOnThumbnails.title} picture" />
    `;

};

/**
 * Description: function add class "active" to array element with Active Index.
 * @param {object} arrayElemToActivate
 * @param {number} triggerIndex
 */
function activeClassOnActiveIndex(arrayElemToActivate, triggerIndex) {

    arrayElemToActivate[triggerIndex].classList.add("active");

};

/**
 * Description: function remove class "active" to array element with Active Index.
 * @param {object} arrayElemToActivate
 * @param {number} triggerIndex
 */
function activeClassOffActiveIndex(arrayElemToActivate, triggerIndex) {

    arrayElemToActivate[triggerIndex].classList.remove("active");

};