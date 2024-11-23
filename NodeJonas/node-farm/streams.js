const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    const readable = fs.createReadStream('test-file.txt');

    readable.on('data', (err, chunk) => {
        if (err) console.log(err)
        res.write(chunk);
    });

    readable.on('end', () => {
        res.end();
    });
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening...');
});