const crypto = require('crypto');
const  pool = require('./dbConfig');
const express = require('express');
const cors = require('cors');
const LoginRouter = express.Router();
const bodyParser = require('body-parser');
const RequestIp = require('request-ip');
const FileControl = require('./FileControlManager');
const path = require('path');
//const http = require('http');
const dataUtil = require('date-utils');//new Date쓸때 써야함
const fs = require('fs');

LoginRouter.use(bodyParser.json());
LoginRouter.use(bodyParser.urlencoded({ extended: true }));



function LoginHandler(req, res, next) {
    console.log(req.body);
    pool.query(`INSERT INTO usermember (user_id, user_pwd) VALUES ($1, $2)`, [req.body.user_id, req.body.user_pwd], function (error, results, fields) {

        if (error) {
        FileControl.FileAppend('로그인 에러 : ' + error);
      } else
      FileControl.FileAppend('로그인 성공 : ' + new Date().toFormat('YYYY-MM-DD HH24:MI:SS'));
  
      res.send(results);

    });
  }


  LoginRouter.post("/login", LoginHandler); // postAddItem 가져오기

  module.exports = LoginRouter;