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
const io = require('socket.io');
//var db = require('./db/');

const httpport = process.env.PORT || 8080;
var socketServer = null;
var socketClient = null;

// method 3: use cors
app.use(cors())
app.use(require('express').static(path.join(__dirname, 'public')));
//app.use(require('express').static(path.join("D:\\tool\\10w\\")));

// app.get('/getPersonTimes', function (req, res) {
//     console.log('[request]: /getPersonTimes');
//     res.set('Content-Type', 'application/json');
//     console.log(JSON.stringify(req.query));
// });
function initSocketIO(httpServer) {
    socketServer = io.listen(httpServer);

    socketServer.on('connect', (socket) => {
        socketClient = socket;
    
        socket.on('get times', (data) => {
            socket.emit('get times', { 'times': 100 });
        })

        socket.on('disconnect', (socket) => {
            console.log("One client disconnect.");
        });
    
      
        console.log("One client connected.");
    });
   
}

httpServer.listen(httpport, function () {
    console.log('listening on ' + ip.address() + ":" + httpport);
});

initSocketIO(httpServer);

