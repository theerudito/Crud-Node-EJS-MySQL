
const express = require("express")
const router = express.Router()
const conexion = require("./database/db")

router.get('/', (req, res)=>{     
  conexion.query('SELECT * FROM users',(error, results)=>{
      if(error){
          throw error;
      } else {                       
          res.render('index.ejs', {results:results});            
      }   
  })
})

// PARA CREAR REGISTROS 
    router.get("/create", (req, res) => {
      res.render("create")
    })
// PARA CREAR REGISTROS 

/*-------------------------*/  

// PARA EDITAR REGISTROS
router.get("/edit/:id", (req, res)=>{
  const id = req.params.id
    conexion.query("SELECT * FROM users WHERE id=?", [id], (error, results) => {
      if(error){
        throw error;
        } else {                       
        res.render('edit.ejs', {user:results[0]});            
        }   
    })
})
// PARA EDITAR REGISTROS

/*-------------------------*/

// PARA ELIMINAR REGISTROS
  router.get("/delete/:id", (req, res) =>{
    const id = req.params.id
    conexion.query("DELETE FROM users WHERE id = ?", [id], (error, results) => {
      if(error){
        throw error;
        } else {                       
          res.redirect("/")    
        }   
    })
  })

// PARA ELIMINAR REGISTROS

const crud = require ("./controles/crud")
const { route } = require("express/lib/application")
router.post("/save", crud.save)
router.post("/update", crud.update)

module.exports = router;