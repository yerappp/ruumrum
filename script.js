const carImages = [
    { src: "ferrari.jpg.jpeg", name: "Ferrari", message: "Eres como un Ferrari, pura velocidad y elegancia en cada paso que das, yujuyy!", font: "Courier New", color: "#ff0000" }, 
    { src: "lambo.jpg.jpeg", name: "Lamborghini", message: "Si fueras un Lamborghini, tendrías la capacidad de deslumbrar a todos con tu belleza y poder.", font: "Impact", color: "#ffcc00" }, 
    { src: "porshe.jpg.jpeg", name: "Porsche", message: "Tu sonrisa es como un Porsche: rápida, deslumbrante y siempre tann lindo bb!!", font: "Georgia", color: "#00ccff" }, 
    { src: "mclaren.jpg.jpeg", name: "McLaren", message: "Eres como un McLaren, un diseño tan impresionante que nadie puede ignorarte.", font: "Verdana", color: "#ff0066" }, 
    { src: "bugatti.jpg.jpeg", name: "Bugatti", message: "Tu personalidad es un Bugatti: única y con un rendimiento que me deja sin aliento.", font: "Arial Black", color: "#6600ff" }, 
    { src: "aston.jpg.jpeg", name: "Aston Martin", message: "Eres un Aston Martin: sofisticado y lleno de clase, ¡un verdadero sueño sobre ruedas!", font: "Garamond", color: "#339900" }, 
    { src: "koe.jpg.jpeg", name: "Koenigsegg", message: "Si fueras un Koenigsegg, estarías en la cima de todas las listas de deseos.", font: "Trebuchet MS", color: "#ff6699" }, 
    { src: "nissan.jpg.jpeg", name: "Nissan GT-R", message: "Tienes la esencia de un Nissan GT-R: una mezcla perfecta de fuerza y agilidad que atrapa la atención.", font: "Tahoma", color: "#cc0000" }
];

let currentIndex = 0;

function updateImage() {
    const carImage = document.getElementById("carImage");
    const carCaption = document.getElementById("carCaption");
    const backgroundText = document.getElementById("backgroundText");

    carImage.src = carImages[currentIndex].src;
    carCaption.textContent = carImages[currentIndex].message;
    backgroundText.textContent = carImages[currentIndex].name;

    backgroundText.style.fontFamily = carImages[currentIndex].font;
    backgroundText.style.color = carImages[currentIndex].color;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % carImages.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + carImages.length) % carImages.length;
    updateImage();
}

function goToCar(index) {
    currentIndex = index;
    updateImage();
}

document.addEventListener('DOMContentLoaded', () => {
    updateImage();
});