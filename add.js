const express = require('express');
const app = express();
const porta =8080;

app.get('/',(req,res)=>{
    res.send('Hola! seja bem vindo na minha pagina')
})

app.get('/fotos',(rep,res)=>{
    res.send('neste momento estas na pagina de fotos')
})

app.post('/add',(req,res)=>{
    res.send('addicionado com succeso')
})



app.listen(porta,()=>{
    console.log('funciona perfeitamente...');
})