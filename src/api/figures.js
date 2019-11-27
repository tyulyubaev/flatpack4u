const express = require('express');
const figuresRouter = express.Router;
 module.exports = figuresRouter;

 const sqlite3 = require('sqlite3');
 const db = new sqlite3.Database('./database.sqlite');

 figuresRouter.get('/', (req, res, next) => {
     db.all('SELECT * FROM Figures', (err, figures) => {
         res.status(200).json({figures: figures});
     });
 });

 