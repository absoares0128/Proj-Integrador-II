document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os botões de adicionar cupcakes
    const addButtonMorango = document.querySelector('.add-morango');
    const addButtonLimao = document.querySelector('.add-limao');
    const carrinho = document.querySelector('.carrinho ul');
    const totalElement = document.querySelector('.total');
    
    // Preços dos cupcakes
    const precoMorango = 8.00;
    const precoLimao = 7.00;
    
    let total = 0; // Total do carrinho
    
    // Função para atualizar o total
    function atualizarTotal() {
        totalElement.textContent = total.toFixed(2); // Atualiza o total no HTML
    }
    
    // Adiciona o cupcake de morango ao carrinho
    addButtonMorango.addEventListener('click', function() {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>Cupcake de Morango - R$ 8,00</span>
            <input type="number" value="1" min="1">
            <button class="remover">Remover</button>
        `;
        carrinho.appendChild(li);
        total += precoMorango; // Adiciona o preço do morango ao total
        atualizarTotal();

        // Adiciona funcionalidade para o botão de remover
        li.querySelector('.remover').addEventListener('click', function() {
            const quantidade = parseInt(li.querySelector('input').value);
            total -= precoMorango * quantidade; // Subtrai o valor total do cupcake removido
            carrinho.removeChild(li); // Remove o item do carrinho
            atualizarTotal(); // Atualiza o total
        });

        // Atualiza o total quando a quantidade de cupcakes for alterada
        const quantidadeInput = li.querySelector('input');
        quantidadeInput.addEventListener('input', function() {
            const quantidade = parseInt(quantidadeInput.value);
            const precoTotal = precoMorango * quantidade;

            total += precoTotal - (precoMorango * (quantidade - 1)); // Ajusta o total
            atualizarTotal();
        });
    });

    // Adiciona o cupcake de limão ao carrinho
    addButtonLimao.addEventListener('click', function() {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>Cupcake de Limão - R$ 7,00</span>
            <input type="number" value="1" min="1">
            <button class="remover">Remover</button>
        `;
        carrinho.appendChild(li);
        total += precoLimao; // Adiciona o preço do limão ao total
        atualizarTotal();

        // Adiciona funcionalidade para o botão de remover
        li.querySelector('.remover').addEventListener('click', function() {
            const quantidade = parseInt(li.querySelector('input').value);
            total -= precoLimao * quantidade; // Subtrai o valor total do cupcake removido
            carrinho.removeChild(li); // Remove o item do carrinho
            atualizarTotal(); // Atualiza o total
        });

        // Atualiza o total quando a quantidade de cupcakes for alterada
        const quantidadeInput = li.querySelector('input');
        quantidadeInput.addEventListener('input', function() {
            const quantidade = parseInt(quantidadeInput.value);
            const precoTotal = precoLimao * quantidade;

            total += precoTotal - (precoLimao * (quantidade - 1)); // Ajusta o total
            atualizarTotal();
        });
    });

    // Função para finalizar a compra
    const finalizarCompraButton = document.querySelector('.finalizar');

    finalizarCompraButton.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o envio do formulário (se necessário)

        // Exibe uma mensagem de sucesso
        alert("Compra finalizada com sucesso! Você será redirecionado.");
        
        // Exemplo de redirecionamento (opcional)
        // window.location.href = 'pagamento.html'; 
    });
});