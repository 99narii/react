import React, { useState, useEffect, useContext } from 'react';
import { User_id, User_pwd, User_name } from './atom';
import {useRecoilState} from 'recoil';


function Register() {

    const RegisterHandler = (e) => {
      console.log(JSON.stringify(e));
      alert(JSON.stringify(e))
        fetch('/register/register', {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({user_id:e.user_id, user_pwd:e.user_pwd, user_name:e.user_name})
        }
        )
          .then((res) => res.json()).then((ret)=>alert(JSON.stringify(ret)))
          .catch(err => alert('error' + err));
      }
      const [user_id,setuser_id]=useRecoilState(User_id);
      const [user_pwd,setuser_pwd]=useRecoilState(User_pwd);
      const [user_name,setuser_name]=useRecoilState(User_name);


    
    return (
        <div className="App">
        <header className="App-header">
          <div>ID : <input type='text' onChange={(e) => {setuser_id(e.target.value)}} /></div>
          <div>PWD : <input type='password'  onChange={(e) => {setuser_pwd(e.target.value)}} /></div>
          <div>NAME : <input type='text'  onChange={(e) => {setuser_name(e.target.value)}} /></div>

          <button onClick={()=>RegisterHandler({user_id:user_id, user_pwd:user_pwd, user_name:user_name})}>입력</button>
        </header>
      </div>
  
    );
  }
  
  export default Register;
  