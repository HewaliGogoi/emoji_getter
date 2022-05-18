const http = require('http');
const app = require('./app');
const PORT = 9008;
const dbConnect = require('./config/db');

http.createServer(app).listen(PORT, () => {
    new dbConnect();
    console.log(`Listening to port ${PORT}...`);
})