
function deleteImage(button) {
    // Obtener la ruta de la imagen correspondiente al botón
    const imagePath = button.parentElement.previousElementSibling.src;
  
    // Eliminar la imagen del DOM
    button.parentElement.parentElement.remove();
  
}

function confirmarEliminacion(button) {
    if (confirm("¿Está seguro de que desea eliminar esta imagen?")) {
        button.parentElement.parentElement.remove();

    }
}