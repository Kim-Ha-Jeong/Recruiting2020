const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const noticeRoute = require('./notice.route');
const resultRoute = require('./result.route')
const uploadRoute = require('./fileupload.route');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/notice', noticeRoute);
app.use('/result', resultRoute);
app.use('/upload', uploadRoute);

app.use(express.static('public'));
app.use('/upload',express.static('upload'));

app.use(cors());

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});

