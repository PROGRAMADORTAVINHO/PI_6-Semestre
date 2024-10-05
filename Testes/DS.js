const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'nome_do_banco'
});

connection.connect();

// Endpoint para buscar dados do banco de dados
app.get('/dados', (req, res) => {
    const query = 'SELECT * FROM tabela'; // Exemplo de consulta SQL
    connection.query(query, (error, results) => {
        if (error) throw error;
        res.json(results); // Envia os dados em formato JSON
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});