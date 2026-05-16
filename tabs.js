const botoes = document. querySelectorAll('button');
const tabs = document. querySelectorAll('.tab');

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        botoes.forEach((botao) => {
            botao.classList.remove('active')
        })

        tabs.forEach((tab) => {
            tab.classList.remove('active');
        })
        
        botoes[index].classList.add('active');
        tabs[index].classList.add('active')
    });
});

