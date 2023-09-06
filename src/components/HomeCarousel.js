import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselCaption,
    Button
} from 'reactstrap';
import { selectCarouselItems } from '../features/carousel/carouselSlice';

const initInterval = 5000;
const emptyStr = '';

function HomeCarousel(args) {
    const carouselItems = useSelector(selectCarouselItems);

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [btnIcon, setBtnIcon] = useState('fa fa-pause');
    const [playing, setPlaying] = useState(true);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
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

    const slides = carouselItems.map((item) => {
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