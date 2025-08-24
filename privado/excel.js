document.addEventListener('DOMContentLoaded', function () {
    const inputQtd = document.querySelector('input[type="number"]');
    const totalSpan = document.querySelector('.total-excel');
    const preco = 280;

    inputQtd.addEventListener('input', function () {
        let qtd = parseInt(inputQtd.value) || 1;
        if (qtd < 1) qtd = 1;
        if (qtd > 35) qtd = 35;
        const total = qtd * preco;
        totalSpan.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    });
});