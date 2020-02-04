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

app.use(express.static('../client/build'));
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.use('/notice', noticeRoute);
app.use('/FAQ', FAQRoute);
app.use('/result', resultRoute);
app.use('/upload', uploadRoute);
app.use('/research', researchRoute);
app.use('/research2', researchRoute2);

app.use('/download',express.static('download'));
app.use('/upload',express.static('uploads'));

app.use(cors());

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});

