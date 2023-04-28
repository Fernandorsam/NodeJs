const express = require('express');

const app = express();
const items = [
    {
        title: 'D',
        message: 'esenvolver aplicações/MicroServiços'
    },
    {
        title: 'E',
        message: 'm quase todos grandes sites tem Node'
    },
    {
        title: 'M',
        message: 'uito fácil de usar'
    },
    {
        title: 'A',
        message: 'lta performance nas aplicações'
    },
    {
        title: 'I',
        message: 'nstalação de facil acesso'
    },
    {
        title: 'S',
        message: 'intaxe muito compreensivo'
    },
   
];
const subtitle = 'Vamos aprender Node,você vai se amarrar a esta tecnologia'

app.set('view engine','ejs');

app.get('/',function(req ,res){
    res.render('pages/index',{
        qualitys:items,
        subtitle : subtitle
    });
});

app.get('/sobre',function(req ,res){
    res.render('pages/about');
});

app.listen(8080);

console.log('Server Run');