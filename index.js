const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

//config
    // Template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

// Rotas

    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts});
        })
        
    })

    // Rota formulário
    app.get('/cadastro', function(req, res){
        res.render('formulario');
    });

    // Rota POST 
    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo, 
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Falha ao cadastrar postagem: " + erro);
        });
    })


    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.redirect('/');
        }).catch(function(erro){
            res.send("Esta postagem não existe!");
        })
    })

app.listen(8081, function () {
    console.log("Server rodando na url http://localhost:8081 ");
});
