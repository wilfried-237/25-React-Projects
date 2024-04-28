import "./index.css";
import data from "./data";
import { useRef } from "react";

export default function ScrollTopBottom() {

    let bottomRef = useRef()

    console.log(bottomRef)

    function scrollToTop(){
        window.scrollTo({
            top:0, left:0, behavior: "smooth"
        })
    }

    function scrollToBottom(){
        bottomRef.current.scrollIntoView({
            behavior: "smooth"
        })

    }



  return (
    <div className="ScrollTopBottom">
      <button onClick={()=> scrollToBottom()}>Scroll To Buttom</button>

      <ul style={{ listStyle: "none" }}>
        {data && data.length > 0
          ? data.map((dataItem, index) => <li key={index}>{dataItem}</li>)
          : null}
      </ul>

      <div ref={bottomRef}></div>
      <button onClick={()=> scrollToTop()}>Scroll To Top</button> 
    </div>
  );
}
