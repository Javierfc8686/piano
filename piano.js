const tecladoPiano = document.querySelectorAll('.tecla');

function playSonido(nuevaURL) {
    
    new Audio(nuevaURL).play()
};


tecladoPiano.forEach((teclado, i) => {
    const number = i < 9 ? + (i + 1) : (i + 1)
    const nuevaURL = 'notas/nota_' + number + '.mp3'
    teclado.addEventListener('click', () => playSonido(nuevaURL))
});





















  
    




