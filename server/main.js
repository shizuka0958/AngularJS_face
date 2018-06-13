//
//  Copyright (C) 2016-2018  dvTrend, Inc - All Rights Reserved
//
//  author: zm
//

var app = require('express')();
var httpServer = require('http').Server(app);
var path = require('path');
var fs = require('fs');
var ip = require('ip');
var moment = require('moment');
var cors = require('cors')
const mysql = require('mysql');
//var db = require('./db/');

const httpport = process.env.PORT || 8080;

// method 3: use cors
app.use(cors())
app.use(require('express').static(path.join(__dirname, 'public')));
//app.use(require('express').static(path.join("D:\\tool\\10w\\")));

app.get('/getPersonTimes', function (req, res) {
    console.log('[request]: /getPersonTimes');
    res.set('Content-Type', 'application/json');
    console.log(JSON.stringify(req.query));
});

httpServer.listen(httpport, function () {
    console.log('listening on ' + ip.address() + ":" + httpport);
});


