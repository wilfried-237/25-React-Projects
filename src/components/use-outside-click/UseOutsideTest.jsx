import { useRef, useState } from "react";
import "./index.css";
import useOutsideClick from "./useOutside.Cick";

function UseOutsideTest() {
  const [showText, setShowText] = useState(false);

  const ref = useRef(null)

    useOutsideClick(ref, ()=>{setShowText(false)})

  return (
    <div className="UseOutsideTest">
      <h1>Use Click Outside Hook</h1>
      {!showText ? (
        <button onClick={()=> setShowText(true)}>Click To Show Text</button>
      ) : (
        <div ref={ref}>
            <h2>This is Title</h2>
            <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque,
          fugit veniam iure, explicabo ducimus vitae quibusdam impedit quidem
          provident atque tempora obcaecati sunt velit dolorem nesciunt numquam
          soluta at alias?
        </p>
        </div>
      )}
    </div>
  );
}

export default UseOutsideTest;
