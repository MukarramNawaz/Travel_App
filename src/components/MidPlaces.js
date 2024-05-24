import React from 'react';

const MidPlaces = () => (
  <section className='showcase'>
    <div className="container">
      <div className="row row1">
        <div className="img-box">
          <img src={require('../img/showcase-photo3.jpg')} alt="Deganvy, UK" />
        </div>
        <div className="text-box">
          <h2 className='lg-heading text-black'>DEGANVY, U.K</h2>
          <p className='text-gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
          <a href="/about" className='btn btn-secondary'>More</a>
        </div>
      </div>
      <div className="row row2">
        <div className="img-box">
          <img src={require('../img/showcase-photo2.jpg')} alt="Desert, Egypt" />
        </div>
        <div className="text-box">
          <h2 className='lg-heading text-black'>DESERT, EGYPT</h2>
          <p className='text-gray'>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
          <a href="./about" className='btn btn-secondary'>More</a>
        </div>
      </div>
    </div>
  </section>
);

export default MidPlaces;
