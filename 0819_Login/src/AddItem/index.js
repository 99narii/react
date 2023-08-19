import React, { useState, useEffect, useContext } from 'react';
import { Item_nm, Item_price } from './atom';
import {useRecoilState} from 'recoil';



function AddItem() {
  
    const ReadContents = (data) => {
      console.log(JSON.stringify(data));
        fetch('/test/AddItem', {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({item_nm:data.item_nm, item_price:data.item_price})
        }
        )
          .then((res) => res.json()).then((ret)=>alert(JSON.stringify(ret)))
          .catch(err => alert('error' + err));
      }
      const [item_nm,setitem_nm]=useRecoilState(Item_nm);
      const [item_price,setitem_price]=useRecoilState(Item_price);

    
    return (
        <div className="App">
        <header className="App-header">
          <div>상품명 : <input type='text' onChange={(e) => {setitem_nm(e.target.value)}} /></div>
          <div>가격 : <input type='text'  onChange={(e) => {setitem_price(e.target.value)}} /></div>
          <button onClick={()=>ReadContents({item_nm:item_nm, item_price:item_price})}>입력</button>
        </header>
      </div>
  
    );
  }
  
  export default AddItem;
  