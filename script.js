const allLi = document.querySelectorAll("nav ul li");
const slider = document.querySelector(".slider");

// Função responsável por mover o slider e ajustar o tamanho dele
function moveSlider(element) {
    slider.style.left = `${element.offsetLeft}px`;
    slider.style.width = `${element.offsetWidth}px`;
}

// Inicializa o slider na aba que começar com a classe 'active'
const activeLi = document.querySelector("nav ul li.active");
if (activeLi) {
    moveSlider(activeLi);
}

// Adiciona o evento de clique para todas as abas
allLi.forEach((li) => {
    li.addEventListener("click", (e) => {
        // Remove a classe 'active' de quem tinha antes
        document.querySelector("nav ul li.active").classList.remove("active");
        
        // Adiciona a classe 'active' na aba clicada (isso muda a cor do texto para branco)
        li.classList.add("active");
        
        // Move o slider de fundo para a posição da nova aba ativa
        moveSlider(li);
    });
});