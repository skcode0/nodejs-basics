const http = require('http');
const fs = require('fs');


http.createServer(function (req, res){
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    let path = "";
    switch(req.url){
        case '/':
            path = './index.html';
            break;
        case '/about':
            path = './about.html';
            break;
        case '/contact-me':
            path = './contact-me.html';
            break;
        default:
            path = './404.html';
            break;
    }

    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.end(data);
        }
    });

}).listen(8080);
