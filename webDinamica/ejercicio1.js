const numImagenes = 6;
function cambiarImagen(){
    let image = document.getElementById("image");
    let numAleatorio = Math.floor(Math.random() * numImagenes +1);
    let nuevoNombre = "imgTarea1/img" + numAleatorio + ".jpg";
    console.log(nuevoNombre)
    image.src= nuevoNombre
}
image.addEventListener("click", cambiarImagen);