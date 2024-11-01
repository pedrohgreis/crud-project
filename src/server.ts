import express from 'express';
import path from 'path';

const app = express();

//definindo o template da engine
app.set('view engine','ejs');
app.set("views", path.join(__dirname, 'views'))

//definindo files public
app.use(express.static(path.join(__dirname,'public')));

//habilita server para receber dados vias post(formulario)
app.use(express.urlencoded({extended:true}));

//rotas
app.get('/', (req,res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
});

//404 error(not found)
app.use((req,res) => {
    res.send("Página não encontrada")
});

//listen server
const port = process.env.PORT || 8080
app.listen(port, () => console.log("Server is listening on port " + port));



