import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import "./Home.css"

const Home = () => {
  const [allActors, setAllActors] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then((data => console.log(data)));

  }, [])


  return (

    <div className='container'>
      <div className='home-container' >
        <div className="card-container">

          {allActors.map((actor) => (
            <div className='card' >
              <div className='card-image'>
                <img className='foto' src="https://i.ibb.co/sssm32s/young-man-wearing-blue-outfit-looking-confident.jpg" alt="" />
              </div>
              <h2>Gabor Simon</h2>
              <p>Viking Torgil Hotel Manager.</p>
              <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. </small></p>
              <div className='info'  >
                <p>Salary: 2000</p>
                <p>Writer</p>
              </div>
              <button className='card-button' >Select</button>
            </div>
          ))}
        </div>

        <div className='cart'  >
          <h1>This is  cart.</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;