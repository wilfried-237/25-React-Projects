import { BsStarFill } from "react-icons/bs";
import "./index.css";
import {useState} from "react";

function StarRating(number = 5) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  function handleClick(currentIndex) {
    setRating(currentIndex == rating? 0 : currentIndex);
  }

  function handleMouseMove(currentIndex) {
    setHoverRating(currentIndex);
  }

  function handleMouseLeave() {
    setHoverRating(0);
  }

  return (
    <div className="star-div">
      <div>
        <h1> Star Rating </h1>

        {
          Array.from({ length: number.number }, (x, i) => i).map((_, index) => {
             index += 1
            
            return(
              <BsStarFill
                key={index}
                className={index <= rating || index <= hoverRating  ? "checked star" : "star"}
                onMouseMove={() => handleMouseMove(index)}
                onMouseLeave={() => handleMouseLeave()}
                onClick={() => handleClick(index)}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default StarRating;
