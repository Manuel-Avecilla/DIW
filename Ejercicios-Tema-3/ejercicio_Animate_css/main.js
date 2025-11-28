function addAnimacion(animateClass) {
    let texto = document.querySelector("#texto");

    // Quitar la clase si ya estaba, para reiniciar la animación
    texto.classList.remove(animateClass);

    // Añadir la clase de animación
    texto.classList.add(animateClass);

    // Escuchar cuando termina la animación para eliminar la clase
    texto.addEventListener('animationend', function handleAnimationEnd() {
        texto.classList.remove(animateClass);
        texto.removeEventListener('animationend', handleAnimationEnd);
    });
}

function addAttentionSeekers() {
    addAnimacion('animate__jello');
}
function addAlert() {
    addAnimacion('animate__backInDown');
}
function addEntrance() {
    addAnimacion('animate__backOutDown');
}
function addExit() {
    addAnimacion('animate__bounceIn');
}
function addBouncingEntrance() {
    addAnimacion('animate__bounceOut');
}
function addFadingEntrance() {
    addAnimacion('animate__fadeInUp');
}
function addFadingExit() {
    addAnimacion('animate__fadeOutDown');
}
function addFlipper() {
    addAnimacion('animate__flipOutX');
}
function addRotatingEntrance() {
    addAnimacion('animate__rotateIn');
}
function addRotatingExit() {
    addAnimacion('animate__rotateOut');
}
function addSpecial() {
    addAnimacion('animate__heartBeat');
}
function addZoomingEntrance() {
    addAnimacion('animate__zoomIn');
}
function addZoomingExit() {
    addAnimacion('animate__zoomOut');
}
function addSlidingEntrance() {
    addAnimacion('animate__slideInLeft');
}
function addSlidingExit() {
    addAnimacion('animate__slideOutRight');
}