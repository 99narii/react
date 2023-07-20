import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import TimeLine from "../../../screen/TimeLine";
import Search from "../../../screen/Search";
import '../../../App.css';


// export default function Aside() {

// const ArrListItem = ['홈', '검색', '탐색', '알림', '프로필'];

// return (
        
//     <aside id='aside' >
//       <ul id='a_list_ul'>
//         {ArrListItem.map((Item) => (
//           <li id='a_list_li'><label>{Item}</label></li>
//         ))}
//       </ul>
//     </aside>
//     );
// }




// export default function Aside() {

// const ArrListItem = ['홈', '검색','탐색','알림','프로필'];
// const NavStyle = {display:'flex', listStyleType:'none', flexDirection:'column', justifyContent:'space-evenly',verticalAlign:'middle',
//   width:'90%', height:'50%'}

// const ListItemStyle = {padding:'5%', color:'#fff', textAlign:'left', fontSize:'20px', fontWeight:'bold'}
// return (
//   <div className="Nav">
//     <aside style={{background:'#252525', display:'flex', height:'100vh', width:'20vw'}}>
//       <ul style={NavStyle}>
//         {ArrListItem.map((Item)=> (
//           <li style={ListItemStyle}><label>{Item}</label></li>
//         ))}
//       </ul>
//     </aside>
//   </div>
// );
// }
