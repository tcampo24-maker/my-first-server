const http = require('http');
const fs = require('fs'); // file system module

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        try {
            const data = fs.readFileSync('index.html');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } catch (error) {
            res.writeHead(500);
            res.end('Something went wrong');
        }
    } else {
        res.writeHead(404);
        res.end('404 not found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});