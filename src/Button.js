// Button.js

import React from "react";

function Button({type, description, disabled}) { // Hoofdletter
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={() => console.log(description) }
        >{description}
        </button>
    );
}

export default Button;

// destructuring props:

//function Button(props) { // Hoofdletter
//     return (
//         <button
//             type={props.type}
//             disabled={props.disabled}
//             onClick={() => console.log(props.description) }
//         >{props.description}
//         </button>
//     );
// }