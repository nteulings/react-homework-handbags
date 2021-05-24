//Tile.js
import React from 'react';


function Tile({tileImage,tileTitle, tileImageAlt, tileParagraphOne, tileParagraphTwo}) {
    return (
        <section>
            <img src={tileImage} alt={tileImageAlt}/>
            <h2>{tileTitle}</h2>
            <p>{tileParagraphOne}</p>
            <p>{tileParagraphTwo}</p>
        </section>
    );
}

export default Tile;

// destructuring props:

//function Tile(props) {
//     return (
//         <section>
//             <img src={props.tileImage}/>
//             <h2>{props.tileImageAlt}</h2>
//             <p>{props.tileParagraphOne}</p>
//             <p>{props.tileParagraphTwo}</p>
//         </section>
//     );
// }