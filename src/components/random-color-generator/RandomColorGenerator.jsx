import { useState } from "react"
import "./index.css"

function RandomColorGenerator() {
  const [color, setColor] = useState("")
  const [type, setType] = useState("")

  function genHexColor(){
    setType("HEX");
    let genColor = []
    let hexRef = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
  
    for(let n=1; n<5; n++){
      genColor.push(hexRef[Math.floor(Math.random()*16)]);
    }

    let fullColor = "#" + genColor.join("");
    setColor(fullColor);
  }

  function genRgbColor(){
    setType("RGB");
    let genColor = []

    for(let n=1; n<4; n++){
      genColor.push(Math.floor(Math.random()*255));
    }

    let fullColor = "rgb(" +genColor.toString() + ")";

    setColor(fullColor);
  }

  

  return (
    <div className="colorChange" style={{backgroundColor: color}}>
      <button onClick={()=> genHexColor()}>Change HEX Color</button>
      <button onClick={()=> genRgbColor()}>Change RGB Color</button>
      <h1>{type} Color: {color}</h1>
    </div>
  )
}

export default RandomColorGenerator