const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'))

app.get('/', (req,res) => {

    res.sendFile(path.join(__dirname, './src/views/home.html'));

})

app.get('/register', (req,res) => {

    res.sendFile(path.join(__dirname, './src/views/register.html'));

})

app.get('/login', (req,res) => {

    res.sendFile(path.join(__dirname, './src/views/login.html'));

})

app.listen(process.env.PORT || 3000, function() {
    console.log('Inicializado el servidor');
})