// Função para alterar a cor quando o mouse passa por cima
function changeColor(element) {
    element.style.color = "#ff9036";
}

// Função para redefinir a cor quando o mouse sai
function resetColor(element) {
    element.style.color = "";
}

// Função para carregar o conteúdo da seção
function loadContent(sectionId) {
    const section = document.getElementById('conteudo');
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            section.innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", sectionId + '.html', true);
    xhttp.send();
}

// Carregar conteúdo da seção Início por padrão
loadContent('inicio');

let imagens = document.querySelectorAll('#carrossel img');
let imagemAtual = 0;

function proximaImagem() {
    imagens[imagemAtual].style.display = 'none';
    imagemAtual = (imagemAtual + 1) % imagens.length;
    imagens[imagemAtual].style.display = 'block';
}

// Altere 4000 para o tempo que você deseja (em milissegundos)
setInterval(proximaImagem, 4000);



// Função para texto sair de trás da imagem

document.addEventListener('DOMContentLoaded', function() {
    const texto = document.getElementById('texto');
    const imagem = document.getElementById('imagem');
    const alturaImagem = imagem.offsetHeight;

    window.addEventListener('scroll', function() {
        const distanciaDaImagem = alturaImagem - (window.scrollY + window.innerHeight);
        if (distanciaDaImagem <= 0) {
            texto.style.opacity = 1;
            texto.style.transform = 'translateX(0)';
        }
    });
});



