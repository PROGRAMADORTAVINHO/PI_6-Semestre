// Fazendo a requisição para obter os dados do banco de dados
fetch('http://localhost:3000/dados')
.then(response => response.json())
.then(data => {
    // Processando os dados recebidos
    const labels = data.map(item => item.nome); // Coluna do BD
    const valores = data.map(item => item.valor); // Outra coluna

    // Criando o gráfico com Chart.js
    const ctx = document.getElementById('meuGrafico').getContext('2d');
    const meuGrafico = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico: barra, linha, etc.
        data: {
            labels: labels,
            datasets: [{
                label: 'Valores',
                data: valores,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
})
.catch(error => console.error('Erro ao buscar dados:', error));
