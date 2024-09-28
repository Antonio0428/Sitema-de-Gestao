const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const connection = require('./model/database');
const app = express();


connection.authenticate().then(()=>{
    console.log("Sucess");
    
}).catch((err)=>{
    console.log("Erro na conexão" + err);
    
})

//body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Controladores
const ProdutosController = require('./controller/produtos/ProdutosController');
const CategoriaController = require('./controller/produtos/CategoriaController');

//Modelos produto
const Categoria = require('./model/produtos/Categoria');
const Produto = require('./model/produtos/Produto');
const Subproduto = require('./model/produtos/Subproduto');
const Estoque = require('./model/produtos/Estoque');
//Modelos user
const Funcao = require('./model/users/Funcao');
const Cliente = require('./model/users/Cliente');
const Funcionario = require('./model/users/Funcionario');
//Modelos Venda
const Venda = require('./model/venda/Venda');
const Carrinho = require('./model/venda/Carrinho');
const ItemVenda = require('./model/venda/ItemVenda');
const ItemCarrinho = require('./model/venda/ItemCarrinho');

//middlewares dos meus controladores
app.use('/', ProdutosController);
app.use('/', CategoriaController);

//views
app.set('view engine','ejs');
ejs.delimiter = '$';

// arquivo
app.use(express.static('public'))

// rotas
app.get('/',(req, res)=>{
    res.render('index',{motivo: "Por nós e para nós"})
});

app.listen(2000,()=>{
    console.log(`Servidor Rodando na Porta 2000`); 
});