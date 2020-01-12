const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const selectAll = 'SELECT * FROM test';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '111111',
    database : 'recruiting2020'
});

connection.connect(err => {
    if(err){
        return err;
    }
});

app.use(cors());

app.get('/', (req,res) => {
    res.send('Hello');
});

app.get('/products', (req, res) => {
    connection.query(selectAll, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    });
});

app.get('/products/add',(req,res) => {
    const {No} = req.query;
    const INSERT = `Insert into test (No) values ('${No}')`
    connection.query(INSERT, (err,results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send('successfully added product!')
        }
    });
})

app.listen(4000, () => {
    console.log(`server listening on port 4000`)
});