import logo from './logo.svg';
import './App.css';
//리코일 import와 아까 만든 아이들 import 해주기
import {useRecoilState} from 'recoil';
import { ItemListAtom, IdAtom, ValueAtom } from './global/globalProperty';


function App() {
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
      <header className="App-header">
        <p>
        {ItemList.map((Item)=>{
          return(
            <div>
            <ul>
              <li><label>상품명: {Item.name} </label></li>
              <li><label>상품가격: {Item.price} </label></li>
            </ul>
            </div>
          )

        })}
        </p>

        <div>
          <label>상품명 :</label>
          <input type='text' onChange={(ev) => textChange(ev)}></input>
          <label>가격 :</label>
          <input type='text' onChange={(ev) => textValueChange(ev)}></input>
        </div>
        <button onClick={(e) => addItem(e)}>
          상품등록
        </button>
      </header>
    </div>
  );
}

export default App;
