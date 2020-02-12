const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const noticeRoute = require('./notice.route');
const FAQRoute = require('./FAQ.route');
const resultRoute = require('./result.route')
const uploadRoute = require('./fileupload.route');
const researchRoute = require('./research.route');
const researchRoute2 = require('./research.route2');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../client/build")))
app.use('/apiServer/notice', noticeRoute);
app.use('/apiServer/FAQ', FAQRoute);
app.use('/apiServer/result', resultRoute);
app.use('/apiServer/upload', uploadRoute);
app.use('/apiServer/research', researchRoute);
app.use('/apiServer/research2', researchRoute2);

app.use('/apiServer/download',express.static('download'));
app.use('/apiServer/upload',express.static('uploads'));

app.use(cors());

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});
