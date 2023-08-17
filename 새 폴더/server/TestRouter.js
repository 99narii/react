const crypto = require('crypto');
const  pool = require('../dbConfig');
const express = require('express');
const cors = require('cors');
const TestRouter = express.Router();
const bodyPaser = require('body-parser');
const RequestIp = require('request-ip');
const FileControl = require('../../FileControl/FileControlManager');

TestRouter.use(bodyPaser.json());

function selectItem(req, res, next) {
    FileControl.FileAppend('select :[' + RequestIp.getClientIp(req) + ']' + new Date().toFormat('YYYY-MM-DD HH24:MI:SS'));
    
    pool.query('SELECT * FROM item', (error, results) => { // replace 'your_table' with your actual table name
      if (error) {
        console.error('Error executing query', error.stack);
      } else {
        console.log(results.rows);
      
      }
      res.send(results.rows);
    });
}

function postAddItem(req, res, next) {
    FileControl.FileAppend('postAddItem start : ' + new Date().toFormat('YYYY-MM-DD HH24:MI:SS'));
    console.log(req.body.item_nm, req.body.item_price);
    pool.query(`INSERT INTO item (item_nm, item_price) VALUES ($1, $2)`, [req.body.item_nm, req.body.item_price], function (error, results, fields) {
      if (error) {
        FileControl.FileAppend('에러 : ' + error);
      }
      FileControl.FileAppend('성공 : ' + new Date().toFormat('YYYY-MM-DD HH24:MI:SS'));
      res.send(results.rows);
    });
  }

TestRouter.post("/additem", postAddItem); // postAddItem 가져오기
TestRouter.post("/itemlist", selectItem);


module.exports = TestRouter;