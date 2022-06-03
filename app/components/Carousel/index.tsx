import React from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

function DefaultCarousel(props:any) {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '95%', md: '40%' });
    const side = useBreakpointValue({ base: '10%', md: '40px' });

    return (
        <Box
            position={'relative'}
            height={'600px'}
            width={'full'}
            overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                borderRadius={50}
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <ArrowLeftIcon />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                borderRadius={50}
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <ArrowRightIcon />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {props.children}
            </Slider>
        </Box>
    );
}

export default DefaultCarousel;