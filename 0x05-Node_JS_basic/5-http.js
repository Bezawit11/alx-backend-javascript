/**
 *creating a server object
 * */
/**
 *creating a server object
 * */
const http = require('http');
const host = 'localhost';
const port = 1245;
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/":
            res.end("Hello Holberton School!");
            break
        case "/students":
            res.end("This is the list of our students");
            break
    }
}

const app = http.createServer(requestListener);
app.listen(port, host, () => {
});

module.exports = app;
