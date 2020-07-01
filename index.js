const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'client/build')));

app.get('/api/getList', (req, res) => {
    list = ['Perro', 'Gato', 'Dinosaurio'];
    res.json(list);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

port = process.env.PORT || 5000;

try {
    app.listen(port);
    console.log(`Servidor corriendo en http://localhost:${port}`);
} catch (error) {
    console.log(`Error: ${error}`);    
}

