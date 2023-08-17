const express = require('express');
//const http = require('http');
const path = require('path');
const bodyPaser = require('body-parser');
const dataUtil = require('date-utils');//new Date쓸때 써야함
const cors = require('cors');
const app = express(); 
const fs = require('fs');
const path = require('path');

app.use(cors(corsOptions));

//http 서버
const server = http.createServer(app);

var whitelist = [
    process.env.REACT_APP_API_ENDPOINT+':3000',
    process.env.REACT_APP_API_ENDPOINT,
    'http://luxkiz.com/',
    'http://luxkiz.com',
    ]

app.use(express.static('static'));
app.use(express.static('src'));
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false }));

//http 접근 설정
app.get("/", (req, res) => {
    fs.readFile(path.resolve(__dirname, "../build/index.html"), (error, data) => {
        if (error) {
            console.log(error);
            return res.status(500).send("<h1>500 Error</h1>");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
});

//http를 listen
server.listen(80);

//로컬 npm start로 쓰기위해
// app.listen(80);
console.log("서버시작!")