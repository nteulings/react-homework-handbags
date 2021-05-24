import React from 'react';
import './App.css';
import Button from './Button';
import Product from './Product';
import Tile from "./Tile";
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png'


function App() {
  return (

<>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button
            type={"button"}
            disabled={false}
            description={"to the collection"}
        />
        <Button
            type={"button"}
            disabled={false}
            description={"shop all bags"}
        />
        <Button
            type={"button"}
            disabled={true}
            description={"pre-orders"}
        />
      </nav>
<main>
    <Product
        spanText={'bestseller'}
        productImage={bag_1}
        productDescription={'The handy bag'}
        productPrice={"€400,-"}
    />
    <Product
        spanText={'bestseller'}
        productImage={bag_2}
        productDescription={'The stylish bag'}
        productPrice={"€250,-"}
    />
    <Product
        spanText={'new collection'}
        productImage={bag_3}
        productDescription={'The simple bag'}
        productPrice={"€300,-"}
    />
    <Product
        spanText={'new collection'}
        productImage={bag_4}
        productDescription={'The trendy bag'}
        productPrice={"€150,-"}
    />
</main>
      <footer>
        <Tile
            tileImageAlt={'Our Story'}
            tileParagraphOne={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem mauris, dictum vitae dapibus ut, tincidunt a sem. Quisque mattis venenatis diam, sed fermentum tellus tempus quis. "}
            tileParagraphTwo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem mauris, dictum vitae dapibus ut, tincidunt a sem. Quisque mattis venenatis diam, sed fermentum tellus tempus quis. '}
        />
        <Tile
            tileImage={brand}
        />
        <Tile
            tileImage={our_story}
        />
        <Tile
            tileTitle={'OUR STORY'}
            tileImageAlt={'Our Story'}
            tileParagraphOne={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem mauris, dictum vitae dapibus ut, tincidunt a sem. Quisque mattis venenatis diam, sed fermentum tellus tempus quis. Phasellus vitae ex vulputate, vestibulum nibh ac, tempus nisl. Suspendisse viverra, velit non feugiat rhoncus, tortor lacus fringilla leo, et aliquam orci augue id arcu."}
        />
      </footer>
</>
  );
}

export default App;



