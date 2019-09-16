// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient; 

// Get API routes 
const api = require('./server/routes/api');
const app = express();

// Parsers for POST data 
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist'))); 

// Set our API routes
app.use('/api', api);

app.get('/', function(req, res){
    res.sendFile(__dirname + './dist/index.html');
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {res.sendFile(path.join(__dirname,'dist/index.html'));
});

// Get port from environment and store in Express
const port = process.env.PORT || '3001';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);
server.listen(port,  () => console.log(`TAngular is running on localhost:${port}`));



