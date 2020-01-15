//const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express();

/* 몽고 디비 연결 */
const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("Connected to mongodb server");
});

//connect메소드로 서버 접속!
mongoose.connect('mongodb://localhost:27017/recruit');

//스키마에 자료형을 정의(레퍼런스 설정)
var test = mongoose.Schema({
    title: String,
    contents: String
});

//모델을 정의(객체를 찍어내는 틀)
var testModel = mongoose.model("testModel", test);
//test를 통해 testModel만들기

//모델로 인스턴스 만들기
var testIns = new testModel({title: "제목입니다", contents: "내용입니다"});

testIns.save(function(err, testIns){
	if(err) return console.error(err);
});

testModel.find(function(err, models){
	if(err) return console.error(err);
	console.log("find() - "+models);
});

testModel.find({name:/^testIns/});

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