const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));

controller(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Sever started successfully on port: ${PORT}`);
});