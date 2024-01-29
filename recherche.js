const allImages = Array.from(document.querySelectorAll(".image_container img"));
const searchInput = document.querySelector('input[type="text"]');

searchInput.addEventListener("input", checkInput);

function checkInput(e) {

    allImages.forEach(image => {
        const searchValue = e.target.value;
        const imageAlt = image.getAttribute("alt");

        if (imageAlt.includes(searchValue.toLowerCase())) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });

};