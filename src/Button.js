// Button.js

import React from "react";

function Button(props) { // Hoofdletter
    return (
        <button
            type={props.type}
            disabled={props.disabled}
            onClick={() => console.log(props.description) }
        >{props.description}
        </button>
    );
}

export default Button;