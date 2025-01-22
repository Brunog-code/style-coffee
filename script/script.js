//Funcao para verificar altura da pagina
function buttomTop(){
    const arrow = document.getElementById('arrow')
    const bkArrow = document.getElementById('bk-arrow')

    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / pageHeight) * 100;

    if (scrollPercentage > 50){
        arrow.style.display = 'block';
        bkArrow.style.display = 'block';
    }else{
        arrow.style.display = 'none';
        bkArrow.style.display = 'none';
    }
}

//Funcao anonima para rolar até o topo
document.querySelector('#arrow').addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
})

//escutar o evento scroll para mostrar o botao
window.addEventListener('scroll', buttomTop);

//ANIMACAO IMGS
const elementos = document.querySelectorAll('[data-anima]');
const animacaoClass = 'animacao';

function animaScroll(){
    const topPagina = window.scrollY+((window.innerHeight*3)/4);
    elementos.forEach(function(elemento){
        const elementopo = elemento.getBoundingClientRect().top + window.scrollY;
        if (topPagina > elementopo){
            elemento.classList.add(animacaoClass);
        }else{
            elemento.classList.remove(animacaoClass);
        }
    })
}

if (elementos.length){
    window.addEventListener('scroll', function(){
        animaScroll();
    })
}

