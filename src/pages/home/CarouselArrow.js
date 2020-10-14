
import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
//react-slick Slider arrow
const CarouselArrow = (props) => {
    let { className, style, onClick } = props;

    className = props.type === "next" ? "nextArrow" : "prevArrow";
    let char = props.type === "next" ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />
    return (
        <div
            className={className}
            style={{
                ...style, display: "block",
                zIndex: '1',
                position: 'absolute',
                top: '50%',
            }}
            onClick={onClick}
        >{char}</div>
    )
}

export default CarouselArrow


