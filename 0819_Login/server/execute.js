const express = require('express');
const http = require('http');
const path = require('path');
const bodyPaser = require('body-parser');
const dataUtil = require('date-utils');//new Date쓸때 써야함
const cors = require('cors');
const app = express(); 
const fs = require('fs');
const TestRouter = require('./TestRouter');
const LoginRouter = require('./LoginRouter');

app.use('/test', TestRouter);
app.use('/login', LoginRouter);

app.use(express.static('static'));
app.use(express.static('src'));
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false }));
app.use(cors(corsOptions));


    var corsOptions = {
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
                FileControl.FileAppend('콜백 시작 : ' + origin);
                FileControl.FileAppend('콜백 시작' + origin);
                callback(null, true)
            } else if (origin === undefined) {
                FileControl.FileAppend('콜백 시작 : ' + origin);
                FileControl.FileAppend('콜백 시작' + origin);
            } else {
                FileControl.FileAppend('origin 주소 : ' + origin);
                FileControl.FileAppend('콜백 시작' + origin);
                callback(new Error('Not allowed by CORS'))
            }
        },
        credentials: true
    }

    

var whitelist = [
    process.env.REACT_APP_API_ENDPOINT+':4000',
    process.env.REACT_APP_API_ENDPOINT,
    'http://luxkiz.com/',
    'http://luxkiz.com',
    'http://localhost:4000',
    'http://localhost:3001',
    'http://localhost',
    'http://localhost:80',
    'http://localhost:4000/',
    'http://localhost:3001/',
    'http://localhost:3000',
    'http://localhost:3000/'

    ]

//http 서버
//const server = http.createServer(app);

//http 접근 설정
// app.get("/", (req, res) => {
//     fs.readFile(path.resolve(__dirname, "../build/index.html"), (error, data) => {
//         if (error) {
//             console.log(error);
//             return res.status(500).send("<h1>500 Error</h1>");
//         }
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// });

//http를 listen
//server.listen(80);

//로컬 npm start로 쓰기위해
 app.listen(4000);
console.log("서버시작!")