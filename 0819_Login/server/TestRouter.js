const crypto = require('crypto');
const  pool = require('./dbConfig');
const express = require('express');
const cors = require('cors');
const TestRouter = express.Router();
const bodyParser = require('body-parser');
const RequestIp = require('request-ip');
const FileControl = require('./FileControlManager');
const path = require('path');
//const http = require('http');
const dataUtil = require('date-utils');//new Date쓸때 써야함
const fs = require('fs');


TestRouter.use(bodyParser.json());
TestRouter.use(bodyParser.urlencoded({ extended: true }));


function postAddItem(req, res, next) {
    console.log(req.body);
    pool.query(`INSERT INTO item (item_nm, item_price) VALUES ($1, $2)`, [req.body.item_nm, req.body.item_price], function (error, results, fields) {
      if (error) {
        FileControl.FileAppend('에러 : ' + error);
      }
      FileControl.FileAppend('성공 : ' + new Date().toFormat('YYYY-MM-DD HH24:MI:SS'));
      res.send(results.rows);
    });
  }

//   function getAddItem(req, res, next) {
//     console.log(req.body);
//     pool.query(`INSERT INTO item (item_nm, item_price) VALUES ($1, $2)`, [req.body.item_nm, req.body.item_price], function (error, results, fields) {
//       if (error) {
//         FileControl.FileAppend('에러 : ' + error);
//       }
//       FileControl.FileAppend('성공 : ' + new Date().toFormat('YYYY-MM-DD HH24:MI:SS'));
//       res.send(results.rows);
//     });
//   }
TestRouter.post("/AddItem", postAddItem); // postAddItem 가져오기
// TestRouter.get("/getAddItem", getAddItem); // postAddItem 가져오기
// TestRouter.post("/itemlist", selectItem);


module.exports = TestRouter;