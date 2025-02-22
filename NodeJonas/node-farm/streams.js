const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    readable.on('error', err => {
        console.log(err);
        res.statusCode = 500;
        res.end('File not found');
    });
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening...');
});