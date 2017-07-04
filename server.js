var express = require('express');

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(process.env.PORT || '8080', function () {
    console.log("Go To localhost:8000 !!!)");
});