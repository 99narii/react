import { useState } from "react";
import { Link } from "react-router-dom";

export default function TopMenu(){
    const [counter, setcounter] = useState(0);
    const counteradd=()=>{
        setcounter(counter+1);
    }

    return (
        <div className="Intro">
            <header>
                <p>
                    인트로 영역+{counter}
                </p>
                <div className="contain">
                    <button onClick={counteradd}>더하기</button>
                    <Link to='/'> <button>Home</button></Link>
                    <Link to='/About'> <button>About</button></Link>
                </div>
            </header>
        </div>
    );

}