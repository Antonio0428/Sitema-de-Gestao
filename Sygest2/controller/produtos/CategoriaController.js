const express = require('express');
const router = express.Router();
const Categoria = require('../../model/produtos/Categoria')

//Rota de Edição
router.get("/categoria/editar/:id", (req, res)=>{
   var id = req.params.id;
   Categoria.findOne({
    where: {
        id: id
    }
   }).then(categoria =>{
        res.render('categoria/editar',{categoria: categoria})
   }).catch()
    
});

router.post("/categoria/editar", (req, res)=>{
    var nome = req.body.nome;
    var id = req.body.id;
    Categoria.update({nome:nome},{
        where:{
            id: id
        }
    }).then(() =>{
        res.redirect("/categoria/criar");
    }).catch(err =>{
        console.log("Erro " + err);
    });
});

//Rota de Remoção
router.post('/categoria/remover',(req, res)=>{
    var id = req.body.id;

    if (!isNaN(id)) {
        Categoria.destroy({
            where:{
                id: id
            }
        }).then(()=>{
            res.redirect('/categoria/criar');
        });
    } else {
        res.redirect('/categoria/criar');
    }
});

router.get("/categoria/lista", (req, res)=>{
    Categoria.findAll({
        order:[
            ["id", "DESC"]
        ]
    }).then(categorias=>{
        res.render('categoria/lista',{categorias: categorias});
    }).catch(err=>{
        console.log("Erro na lista Cat: " + err);
    })
    
});
//Rotas da Criação
router.get("/categoria/criar", (req, res)=>{
    Categoria.findAll({
        order:[
            ["id", "DESC"]
        ]
    }).then(categorias=>{
        res.render('categoria/criar',{categorias: categorias});
    }).catch(err=>{
        console.log("Erro na lista Cat: " + err);
    })
    
});
router.post("/categoria/cadastro", (req, res)=>{
    var nome = req.body.nome;
    Categoria.create({nome: nome}).then(()=>{
        res.redirect("/categoria/criar");
        
    }).catch(err=>{
        console.log("Erro no castro" + err);
        
    })
});

router.get('/')

module.exports= router;