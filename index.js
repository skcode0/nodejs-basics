// const http = require('http');
// const fs = require('fs');


// http.createServer(function (req, res){
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });

//     let path = "";
//     switch(req.url){
//         case '/':
//             path = './index.html';
//             break;
//         case '/about':
//             path = './about.html';
//             break;
//         case '/contact-me':
//             path = './contact-me.html';
//             break;
//         default:
//             path = './404.html';
//             break;
//     }

//     fs.readFile(path, (err, data) =>{
//         if(err){
//             console.log(err);
//             res.end();
//         }
//         else{
//             res.end(data);
//         }
//     });

// }).listen(8080);


// express
const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/about', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './about.html'));
});

app.get('/contact-me', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './contact-me.html'));
});

app.all('*', (req, res) =>{
    res.status(404).sendFile(path.resolve(__dirname, './404.html'));
});

app.listen(8080);
