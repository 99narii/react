import React, { useState, useEffect, useContext } from 'react';
import { User_id, User_pwd } from './atom';
import {useRecoilState} from 'recoil';



function Login() {

    const LoginHandler = (e) => {
      console.log(JSON.stringify(e));
      alert(JSON.stringify(e))
        fetch('/login/login', {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({user_id:e.user_id, user_pwd:e.user_pwd})
        }
        )
          .then((res) => res.json()).then((ret)=>alert(JSON.stringify(ret)))
          .catch(err => alert('error' + err));
      }
      const [user_id,setuser_id]=useRecoilState(User_id);
      const [user_pwd,setuser_pwd]=useRecoilState(User_pwd);

    
    return (
        <div className="App">
        <header className="App-header">
          <div>ID : <input type='text' onChange={(e) => {setuser_id(e.target.value)}} /></div>
          <div>PWD : <input type='text'  onChange={(e) => {setuser_pwd(e.target.value)}} /></div>
          <button onClick={()=>LoginHandler({user_id:user_id, user_pwd:user_pwd})}>입력</button>
        </header>
      </div>
  
    );
  }
  
  export default Login;
  