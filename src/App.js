import React from 'react';
import './App.css';
import Button from './Button.js';
import bag_1 from './assets/bag_1.png'
import bag_2 from './assets/bag_2.png'
import bag_3 from './assets/bag_3.png'
import bag_4 from './assets/bag_4.png'


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
    <article>
        <span>bestseller</span>
        <img src={bag_1} alt={"The handy bag"}/>
        <p>The handy bag</p>
        <h4>€400,-</h4>
    </article>
    <article>
        <span>bestseller</span>
        <img src={bag_2} alt={"The stylish bag"}/>
        <p>The stylish bag</p>
        <h4>€250,-</h4>
    </article>
    <article>
        <span>new collection</span>
        <img src={bag_3} alt={"The simple bag"}/>
        <p>The simple bag</p>
        <h4>€300,-</h4>
    </article>
    <article>
        <span>new collection</span>
        <img src={bag_4} alt={"The trendy bag"}/>
        <p>The trendy bag</p>
        <h4>€150,-</h4>
    </article>
</main>
      </>
  );
}

export default App;



