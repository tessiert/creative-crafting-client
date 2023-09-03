import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselCaption,
    Button
} from 'reactstrap';
import carouselImg1 from '../app/assets/img/keychains/001_1.jpg';
import carouselImg2 from '../app/assets/img/hats/004_1.jpg';
import carouselImg3 from '../app/assets/img/necklaces/002_1.jpg';
import carouselImg4 from '../app/assets/img/hats/005_1.jpg';
import carouselImg5 from '../app/assets/img/necklaces/006_1.jpg';
import carouselImg6 from '../app/assets/img/keychains/006_1.jpg';
import carouselImg7 from '../app/assets/img/hats/007_1.jpg';

const items = [
    {
        src: carouselImg1,
        altText: 'Handmade Keychains',
        caption: 'Handmade Keychains',
        key: 1,
    },
    {
        src: carouselImg2,
        altText: 'Crochet Hats',
        caption: 'Crochet Hats',
        key: 2,
    },
    {
        src: carouselImg3,
        altText: 'Hand-Painted Necklaces',
        caption: 'Hand-Painted Necklaces',
        key: 3,
    },
    {
        src: carouselImg4,
        altText: 'Original Designs',
        caption: 'Original Designs',
        key: 4,
    },
    {
        src: carouselImg5,
        altText: 'One-of-a-Kind',
        caption: 'One-of-a-Kind',
        key: 5,
    },
    {
        src: carouselImg6,
        altText: 'Unique Gifts',
        caption: 'Unique Gifts',
        key: 6,
    },
    {
        src: carouselImg7,
        altText: 'Lovingly Crafted',
        caption: 'Lovingly Crafted',
        key: 7,
    },
];

const initInterval = 5000;
const emptyStr = '';

function HomeCarousel(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [btnIcon, setBtnIcon] = useState('fa fa-pause');
    const [playing, setPlaying] = useState(true);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    // const goToIndex = (newIndex) => {
    //     if (animating) return;
    //     setActiveIndex(newIndex);
    // };

    const playToggle = () => {
        if (playing) {
            setPlaying(false);
            setBtnIcon('fa fa-play');
        } else {
            setPlaying(true);
            setBtnIcon('fa fa-pause');
            next();
        }
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img id='homeCarouselImg' className='d-block w-100' src={item.src} alt={item.altText} />
                <CarouselCaption
                    captionHeader={item.caption}
                    captionText={emptyStr}
                />
            </CarouselItem>
        );
    });

    return (
        <>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                interval={playing ? initInterval : false}
                ride='carousel'
                pause={false} // 'false' prevents pause on mouse hover
                {...args}
            >
                <Button color='success' size='sm' onClick={playToggle}
                    id="carouselButton">
                    <i className={btnIcon}></i>
                </Button>
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </>
    );
}

export default HomeCarousel;