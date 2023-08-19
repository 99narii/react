const crypto = require('crypto');
const  pool = require('./dbConfig');
const express = require('express');
const cors = require('cors');
const RegisterRouter = express.Router();
const bodyParser = require('body-parser');
const RequestIp = require('request-ip');
const FileControl = require('./FileControlManager');
const path = require('path');
//const http = require('http');
const dataUtil = require('date-utils');//new Date쓸때 써야함
const fs = require('fs');

RegisterRouter.use(bodyParser.json());
RegisterRouter.use(bodyParser.urlencoded({ extended: true }));

function RegisterHandler(req, res, next) {

    console.log(req.body);
    pool.query(`INSERT INTO usermember (user_id, user_pwd, user_name) VALUES ($1, $2 , $3)`, 
    [req.body.user_id, req.body.user_pwd, req.body.user_name], function (error, results, fields) {

        if (error) {
        FileControl.FileAppend('회원가입 에러 : ' + error);
      } else
      FileControl.FileAppend('회원가입 성공 : ' + new Date().toFormat('YYYY-MM-DD HH24:MI:SS'));
      res.send(results);

    });
  }


  RegisterRouter.post("/register", RegisterHandler);

  module.exports = RegisterRouter;
