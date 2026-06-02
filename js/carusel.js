const img = [
    "img/zombies.jpg",
    "img/zombies1.jpg",
    "img/zombies2.jpg",
    "img/zombies3.jpg",
    "img/zombies4.jpg",

]

var imgActual = 0;

document.getElementById("imagen").src = img[imgActual];

document.getElementById("anterior").addEventListener("click", () => {
    if (imgActual !== 0 ) {
        imgActual--;
        document.getElementById("imagen").src = img[imgActual];
    } else {
        imgActual = 4;
        document.getElementById("imagen").src = img[imgActual];
    }
    console.log(imgActual);
});

document.getElementById("siguiente").addEventListener("click", () => {
    if (imgActual < img.length - 1 ) {
        imgActual++;
        document.getElementById("imagen").src = img[imgActual];
    } else {
        document.getElementById("imagen").src = "";
    }
    console.log(imgActual);
});