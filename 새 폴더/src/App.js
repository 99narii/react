import React from 'react';
import { Link , Route ,Switch} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import { ItemListAtom, IdAtom, ValueAtom } from './global/globalProperty';
import { RecoilRoot } from 'recoil';
import './App.css';

function App() {

  const ReadContents = (data) => {
    fetch('/request/Additem', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({Id:Id, Value:Value})
    }
    )
      .then((res) => res.json()).then((ret)=>alert(JSON.stringify(ret)))

      .catch(err => alert('error' + err));
  }

  const selectItem = () => {
    fetch('/request/itemlist', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    }
    )
      .then((res) => res.json()).then((ret)=>alert(JSON.stringify(ret)))

      .catch(err => alert('error' + err));
  }

  //값을 set
  const[ItemList, setItemList] = useRecoilState(ItemListAtom);
  const[Id, setId] = useRecoilState(IdAtom);
  const[Value, setValue] = useRecoilState(ValueAtom);

  //값을 추가하고 넣어줌
  const addItem =()=> {
    var newList = [...ItemList];
    newList.push({name:Id, price:Value});
    setItemList([...newList])
  }

const textChange=(ev)=>{
  setId(ev.target.value);
}

const textValueChange=(ev)=>{
  setValue(ev.target.value);
}
return (
  
 <div className="App">
        

    <header>
      <p>
        {ItemList.map((Item) => {
          return(
            <div>
              <ul>
                <li><label>상품명: {Item.name} </label></li>
                <li><label>상품가격: {Item.price} </label></li>
              </ul>
            </div>)
        })}
      </p>

      <div>
          <label>상품명 :</label>
          <input type='text' onChange={(e) => {setId(e.target.value)}}></input>
          <label>가격 :</label>
          <input type='text' onChange={(e) => {setValue(e.target.value)}}></input>
        </div>
        <button onClick={()=>ReadContents({Id:Id, Value:Value})}>
          상품등록
        </button>
     
   </header>

    
 </div>

);
}

export default function WrappedApp() {
return (
< RecoilRoot >
<App />
</ RecoilRoot >
)
}