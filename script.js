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
