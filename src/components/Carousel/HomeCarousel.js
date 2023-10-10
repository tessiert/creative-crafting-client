import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { useSelector } from 'react-redux';
import Carousel from 'nuka-carousel';
import { prevControl, nextControl } from './controls';
import { selectCarouselItems } from '../../features/carousel/carouselSlice';

function HomeCarousel() {
  const carouselItems = useSelector(selectCarouselItems);
  const [btnIcon, setBtnIcon] = useState('fa fa-pause');
  const [playing, setPlaying] = useState(true);

  const PlayPauseButton = () => {
    const playToggle = () => {
      if (playing) {
        setPlaying(false);
        setBtnIcon('fa fa-play');
      } else {
        setPlaying(true);
        setBtnIcon('fa fa-pause');
      }
    };

    return (
      <Button color='success' size='sm' onClick={playToggle}
        id="carouselButton">
        <i className={btnIcon}></i>
      </Button>
    );
  };

  const slides = carouselItems.map((item) => {
    return (
      <div key={item.caption} className='slide-container'>
        <img id='homeCarouselImg' className='d-block w-100' src={item.src} alt={item.altText} />
        <div className='slide-caption'>{item.caption}</div>
      </div>
    );
  });

  return (
    <div style={{ display: 'flex' }}>
      <Carousel
        className='carousel'
        wrapAround={true}
        autoplay={playing ? true : false}
        autoplayInterval={5000}
        startIndex='0'
        pauseOnHover={false}
        animation='fade'
        scrollMode='remainder'
        renderBottomCenterControls={false}
        renderCenterLeftControls={prevControl}
        renderCenterRightControls={nextControl}
        renderBottomRightControls={PlayPauseButton}
      >
        {slides}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;