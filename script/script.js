//Funcao para verificar altura da pagina
function buttomTop(){
    const arrow = document.getElementById('arrow');
    const bkArrow = document.getElementById('bk-arrow');

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

//JANELA IMGS
function janelaIMGs(img, altTxt){
    const janelaImagens = document.getElementById('janelaImagens');
    const btnFecharJanela = document.getElementById('btnFecharJanela');
    const imgJanela = document.getElementById('imgJanela');
    const txtImg = document.getElementById('txtImg');

    janelaImagens.classList.remove('escondeJanela'); //remove a classe que esconde a janela
    janelaImagens.classList.add('mostraJanela'); //add a classe que mostra a janela

    imgJanela.src = img; //adiciona a imagem passada no parametro para a janela
    txtImg.innerHTML = altTxt; //adiciona o texto passado no parametro para a janela

    btnFecharJanela.onclick = function(){
        janelaImagens.classList.add('escondeJanela'); 
        janelaImagens.classList.remove('mostraJanela');
    }
}

//TABS
function openTab(event, nameTab) {
    const conteudoTab = document.getElementsByClassName('conteudoTab');
    const btnTab = document.querySelectorAll('[data-btnTabs]');

    // Verifica se o botão já possui a classe 'ative'
    if (event.currentTarget.classList.contains('ative')) {
        // Oculta o conteúdo e remove a classe 'ative'
        document.getElementById(nameTab).style.display = 'none';
        event.currentTarget.classList.remove('ative');
    } else {
        // Oculta todas as abas abertas
        for (var i = 0; i < conteudoTab.length; i++) {
            conteudoTab[i].style.display = 'none';
        }

        // Remove a classe 'ative' de todos os botões
        for (var i = 0; i < btnTab.length; i++) {
            btnTab[i].classList.remove('ative');
        }

        // Exibe o conteúdo e adiciona a classe 'ative' ao botão clicado
        document.getElementById(nameTab).style.display = 'flex';
        event.currentTarget.classList.add('ative');
    }
}

document.getElementById('first').click();








