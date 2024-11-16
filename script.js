// Tablica z nazwami obrazków
const productImages = ["Product11.png", "Product12.png", "Product13.png", "Product14.png"];
let currentImageIndex = 0;

// Elementy HTML
const productImageElement = document.getElementById("productImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Funkcja do zmiany zdjęcia
function updateImage(index) {
    productImageElement.src = productImages[index];
}

// Obsługa kliknięcia przycisku "Poprzednie"
prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + productImages.length) % productImages.length;
    updateImage(currentImageIndex);
});

// Obsługa kliknięcia przycisku "Następne"
nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % productImages.length;
    updateImage(currentImageIndex);
});
