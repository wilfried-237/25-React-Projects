import { BsStarFill } from "react-icons/bs";
import "./index.css";
import { useState } from "react";

function StarRating(number) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  let numberOfStars = [];
  
  console.log(numberOfStars);
          
  for(let i=0; i<=number; i++){

    numberOfStars[i] = i
    console.log(numberOfStars);


  }

  function handleClick(currentIndex) {
    console.log(currentIndex);
  }

  function handleMouseMove(currentIndex) {
    console.log(currentIndex);
  }

  function handleMouseLeave(currentIndex) {
    console.log(currentIndex);
  }

  return (
    <div className="star-div">
      <div>
        <h1> Star Rating </h1>

        {
          
          numberOfStars.map((_, index) => {
            return (
              <BsStarFill
                key={index}
                className={index <= rating ? "checked star" : "inactive star"}
                onMouseMove={() => handleMouseMove(index)}
                onMouseLeave={() => handleMouseLeave(index)}
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
