document.addEventListener('DOMContentLoaded', function () {
    const inputQtd = document.querySelector('input[type="number"]');
    const totalSpan = document.querySelector('.total-ingles');
    const preco = 1200;

    inputQtd.addEventListener('input', function () {
        let qtd = parseInt(inputQtd.value) || 1;
        if (qtd < 1) qtd = 1;
        if (qtd > 60) qtd = 60;
        const total = qtd * preco;
        totalSpan.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    });
});