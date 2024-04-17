import { BsStarFill } from "react-icons/bs";
import "./index.css";
import { useState } from "react";

function StarRating(number) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  function hanbleClick(currentIndex) {
    console.log(currentIndex);
  }

  function handleMouseMove(index) {
    console.log(currentIndex);
  }

  function handleMouseLeave(index) {
    console.log(currentIndex);
  }

  return (
    <div className="star-div">
      <div>
        <h1> Star Rating </h1>

        {[...Array(number)].map((_, index) => {
          index += 1;

          return (
            <BsStarFill
              key={index}
              className={index <= rating ? "checked star" : "inactive star"}
              onMouseMove={() => handleMouseMove(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => hanbleClick(index)}
            />
          )
        })}
      </div>
    </div>
  );
}

export default StarRating;
