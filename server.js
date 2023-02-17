import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const server = express();
const hostname = '0.0.0.0';
const port = 9000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.use(express.json());

server.use(express.static(__dirname + '/public'));
server.use('/images', express.static('images'));

server.get("/", (req, res) => {
    res.send('Dashboard page is still in development...');
});


server.listen(port, hostname, () => { 
  console.log(`server started on port ${port}`);
});




