import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const prevControl = ({ previousSlide }) => (
  <button
    className='carousel-control bg-transparent flex m-3'
    onClick={previousSlide}
    aria-label="Go to previous slide"
  >
    <FaAngleLeft size={32} />
  </button>
);


export const nextControl = ({ nextSlide }) => (
  <button
    className='carousel-control bg-transparent flex m-3'
    onClick={nextSlide}
    aria-label="Go to next slide"
  >
    <FaAngleRight size={32} />
  </button>
);

