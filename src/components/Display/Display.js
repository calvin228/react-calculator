import React from "react";
import "./Display.css";

const Display = (props) => {
    return (
        <div className="calc-display">
            {props.display}
        </div>
    )
}

export default Display;