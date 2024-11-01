"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = require("path");
const app = (0, express_1.default)();
//definindo o template da engine
app.set('view engine', 'ejs');
app.set("views", path_1.default.join(__dirname, 'views'));
//definindo files public
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//habilita server para receber dados vias post(formulario)
app.use(express_1.default.urlencoded({ extended: true }));
//rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    });
});
//404 error(not found)
app.use((req, res) => {
    res.send("Página não encontrada");
});
//listen server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Server is listening on port " + port));
