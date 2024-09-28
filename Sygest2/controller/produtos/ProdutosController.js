const express = require('express');
const router = express.Router();
const Categoria = require('../../model/produtos/Categoria');
const Produto = require('../../model/produtos/Produto');
const Subproduto = require('../../model/produtos/Subproduto');

router.get("/produto",(req, res)=>{

});

//Rota de Criação
router.get("/produto/criar",(req, res)=>{
    Produto.findAll({
        include: [{model: Categoria}],
       
            order:[
                ['id','DESC']
            ]
    }).then(produtos=>{
        Categoria.findAll({
            order:[
                ['id', 'DESC']
            ]
        }).then(categorias=>{
            res.render("produto/criar",{categorias: categorias, produtos: produtos});
        }).catch(err=>{
            console.log("Erro no selecionar a categoria" + err);
        })
    }).catch(err=>{
        console.log("Erro no selecionar a categoria" + err);
        
    });
    
});
router.post("/produto/salvar",(req, res)=>{
   var nome = req.body.nome;
   var descricao = req.body.descricao;
   var categoriaId = req.body.categoriaId;
    Produto.create({nome: nome, precoMedio: 0, descricao: descricao, categoriaId: categoriaId}).then(()=>{
        res.redirect("/produto/criar");
    }).catch(err=>{
        console.log('Erro ao cadastrar produto' + err);
        
    });
});


//Rota de detalhes
router.get("/produto/detalhes/:id",(req, res)=>{
    var id = req.params.id;
    var id2 = req.params.id2;
    Produto.findOne({
        include: [{model: Categoria}],
        where:{
            id: id
        }
    }).then(produto=>{
        Subproduto.findAll({
            order:[
                ["id", "DESC"]
            ],
            where:{
                produtoId: id
            }
        }).then(subprodutos=>{
            res.render("produto/detalhes",{subprodutos: subprodutos, produto: produto});
        }).catch(err=>{
            console.log("Erro no selecionar a subprodutos" + err);
            
        }); 
    })
});



//ROTAS DE SUBPRODUTOS
//Rota de criação
router.get("/subproduto/criar/:id",(req, res)=>{
    var id = req.params.id;
    Subproduto.findAll({
        include: [{model: Produto}],
            order:[
                ['id','DESC']
            ],
            where:{
                produtoId: id
            }
    }).then(subprodutos=>{
        Produto.findAll({
            order:[
                ['id', 'DESC']
            ]
        }).then(produtos=>{
            res.render("subproduto/criar",{produtos: produtos, subprodutos: subprodutos});
        }).catch(err=>{
            console.log("Erro no selecionar a produtos" + err);
        });
    }).catch(err=>{
        console.log("Erro no selecionar a produtos" + err);
        
    })
    
});
router.post("/subproduto/salvar",(req, res)=>{
   var nome = req.body.nome;
   var peso = req.body.peso;
   var tamanho = req.body.tamanho;
   var cor = req.body.cor;
   var preco = req.body.preco;
   var descricao = req.body.descricao;
   var produtoId = req.body.id;
   Subproduto.create({nome: nome, peso: peso,tamanho: tamanho, cor: cor, preco: preco, descricao: descricao, produtoId: produtoId}).then(()=>{
        res.redirect("/subproduto/criar");
    }).catch(err=>{
        console.log('Erro ao cadastrar subproduto' + err);
        
    });
});

//Rota de Listagem de subproduto
router.get("/subproduto/lista",(req, res)=>{
    Subproduto.findAll({
        include: [{model: Produto}],
       
            order:[
                ['id','DESC']
            ]
    }).then(subprodutos=>{
        Produto.findAll({
            order:[
                ['id', 'DESC']
            ]
        }).then(produtos=>{
            res.render("subproduto/lista",{produtos: produtos, subprodutos: subprodutos});
        }).catch(err=>{
            console.log("Erro no selecionar a produtos" + err);
        });
    }).catch(err=>{
        console.log("Erro no selecionar a produtos" + err);
        
    })
    
});

//Rota de detalhes
router.get("/subproduto/detalhes/:id/:id2",(req, res)=>{
    var id = req.params.id;
    var id2 = req.params.id2;
    Subproduto.findOne({
        where:{
            id: id
        }
    }).then(subproduto=>{
        Produto.findOne({
            include: [{model: Categoria}],
            where: {
                id: id2
            }
        }).then(produto=>{
            res.render("subproduto/detalhes",{subproduto: subproduto, produto: produto});
        }).catch(err=>{
            console.log("Erro no selecionar a categoria" + err);
            
        });


        
    })
});
module.exports= router;