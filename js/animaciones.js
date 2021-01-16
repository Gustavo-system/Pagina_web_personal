let animado = document.querySelectorAll(".animacion");

const ShowScroll = () => {
    let scroll = document.documentElement.scrollTop;
    
    for(let i=0; i<animado.length; i++){
        let altura = animado[i].offsetTop;
        if (altura - 610 < scroll) {
            animado[i].style.opacity = 1;
            animado[i].classList.add('mostrarArriba');
        }
    }
}

window.addEventListener('scroll', ShowScroll);