const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');
    db.run(`
    CREATE TABLE IF NOT EXISTS Figures(
        id INTEGER PRIMARY KEY NOT NULL,
        param TEXT NOT NULL,
        value INTEGER
    )        
    `);