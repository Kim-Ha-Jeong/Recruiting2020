//const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express();

/* 몽고 디비 연결 */
const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("Connected to mongod server");
});

//connect메소드로 서버 접속!
mongoose.connect('mongodb://localhost/recruit');

/*
mysql 코드

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
*/
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