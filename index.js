//Building a Server that returns Hello World to all user requests.

const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

app.use('/', function(req,res){
    return res.send("<h1>Hello World</h1>");
})

app.listen(port,function(err){
    if(err){
        return console.log('Error:', err);
    }
    return console.log('Express Server is up and running on port', port);
})