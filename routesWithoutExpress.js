const fs = require('fs')
const http = require('http')

// myReadStream.on('data', function(chunk){
//     console.log('Chunk received');
//     console.log(chunk);
// })

const server = http.createServer(function (req, res) {

    // reading a file in chuunks
    // var myReadStream = fs.createReadStream(__dirname + '/home.html', 'utf8');
    // var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
    console.log(req.url)
    if (req.url === '/home' || req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/home.html', 'utf8').pipe(res)
    } else if (req.url === '/contact'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res)
    } else if (req.url === '/api/users'){
        var users = [
            {name: 'Norbert', job: 'Developer'},
            {name: 'Ian', job: 'Developer'},
            {name: 'Eric', job: 'CEO'}
        ]
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));

    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res)
    }
    // myReadStream.pipe(res)
    // res.end('Hey there') 

    // var myObj = {
    //     name: 'Norbert',
    //     job: 'Software Developer',
    //     age: 29
    // }
    // res.end(JSON.stringify(myObj))
});

server.listen(3002, () => {
    console.log('Listening on port 3002')
});