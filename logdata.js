const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {
    const now = new Date().toLocaleString();
    const logMessage = `{now} ${req.url}; New Request Receive`;

    console.log(logMessage);
});



fs.appendFile("request_log.txt", logMessage + "\n", (err) => {
    if (err) console.log(err);

});

if (req.url === "/"){
    res.writeHead(200, { "content-type": "text/html"})
}