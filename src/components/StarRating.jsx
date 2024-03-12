import '../css/StarRating.css';
import {FaStar} from 'react-icons/fa';
import { useState } from 'react';

function StarRating({numberOfStars = 5}){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(currentIndex) {
        setRating(currentIndex);
    }
    function handleMouseEnter(currentIndex) {

        setHover(currentIndex);
    }
    function handleMouseLeave() {

        setHover(rating);
    }

    return (
        <>
            <div className="container">
                <div className="star-rating">
        {
            [...Array(numberOfStars)].map((_, index)=>{
                index++;
                return <FaStar
                className={index <= (hover || rating)? 'active': 'inactive'}
                        key={index}
                        onClick={()=>{handleClick(index)}}
                        onMouseEnter={()=>{handleMouseEnter(index)}}
                        onMouseLeave={()=>{handleMouseLeave()}}
                        size={40}
                    />
            })
        }
        </div>
            </div>
        </>
    );
}

export default StarRating;
