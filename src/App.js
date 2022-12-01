import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
// import './App.css';

const createArray = (length) => [...Array(length)];

function Star(props) {
  return <FaStar color={props.color} />;
}

function StarRating({ totalStars }) {
  // const totalStars = props.totalStars;
  // const {totalStars} = props;
  return (
    <>
      {createArray(totalStars).map((n, index) => {
        return <Star key={index} />;
      })}
    </>
  );
}

function App() {
  return (
    <div className='App'>
      <StarRating totalStars={20} />
    </div>
  );
}

export default App;
