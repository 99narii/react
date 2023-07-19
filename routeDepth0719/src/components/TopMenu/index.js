import { useState } from "react";
import { Link } from "react-router-dom";

export default function TopMenu() {
    return (
        <div className="Nav">
            <ul>
                <li><Link to="/first/one">홈</Link></li>
                <li><Link to="/second/one">홈2</Link></li>
                <li><Link to="/third/one">홈3</Link></li>
                <li><Link to="/fourth/one">홈4</Link></li>

            </ul>

        </div>

    )

}