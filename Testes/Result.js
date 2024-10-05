// Fazendo a requisição para obter os dados do banco de dados
fetch('http://localhost:3000/dados')
    .then(response => response.json())
    .then(data => {
        // Processando os dados recebidos
        const labels = data.map(item => item.nome); // Coluna do BD
        const valores = data.map(item => item.valor); // Outra coluna

        // Criando o gráfico com Chart.js
        const ctx = document.getElementById('meuGrafico').getContext('2d');
        const temperatura = new Chart(ctx, {
            type: 'line', // Tipo de gráfico: barra, linha, etc.
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
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Line Chart'
                    }
                }
            }
        });

        const vibracao = new Chart(ctx, {
            type: 'line', // Tipo de gráfico: barra, linha, etc.
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
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Line Chart'
                    }
                }
            }
        });
    })
    .catch(error => console.error('Erro ao buscar dados:', error));
