const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {

    const now = new Date().toLocaleString();
    const logMessage = `${now} ${req.url}; New Request Received`;

    console.log(logMessage);
    fs.appendFile("request_log.txt", logMessage + "\n", (err) => {
        if (err) console.log(err);
    });

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Page");
    }
    else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Contact Page");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }

});


server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
