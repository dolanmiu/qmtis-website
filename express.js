var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '/dist')));

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(process.env.PORT || 5000);