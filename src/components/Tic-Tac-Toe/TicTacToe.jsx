import { useEffect, useState } from "react";
import "./index.css";

function TicTacToe() {

   const [newValue, setNewValue] = useState(Array(9).fill(""));
   const [isXturn, setIsXTurn] = useState(true);

//    1 2 3
//    4 5 6
//    7 8 9

   function getWinner(newValue){
    const winnerPaterns = [
        [1,2,3],    
        [4,5,6],    
        [7,8,9],    
        [1,4,7],    
        [2,5,8],    
        [3,6,9],    
        [1,5,9],    
        [3,5,7] 
       ]

    for(let i=0; i<winnerPaterns.length; ){
        const [x,y,z] = winnerPaterns
    }


   }

   useEffect(()=>{


   }, [newValue])

   

    function handleClick(index){

        const copyValue = [...newValue];

        if(copyValue[index]) return;

        if(isXturn){

            copyValue[index] = "x";
            setNewValue(()=> copyValue);
            setIsXTurn(!isXturn);
        }else{
            copyValue[index] = "0"
            setNewValue(()=> copyValue);
            setIsXTurn(!isXturn);
        }

    }


  function Square({value, onClick}) {
    console.log(value)
    return <span className="btn" onClick={onClick}>{value}</span>;
  }

  return (
    <div className="TicTacToe">
      <h1>Tic Tac Toe Game</h1>
      <div className="row">
        <Square onClick = {()=> handleClick(0)} value = {newValue[0]} />
        <Square onClick = {()=> handleClick(1)} value = {newValue[1]} />
        <Square onClick = {()=> handleClick(2)} value = {newValue[2]} />
      </div>

      <div className="row">
        <Square onClick = {()=> handleClick(3)} value = {newValue[3]} />
        <Square onClick = {()=> handleClick(4)} value = {newValue[4]} />
        <Square onClick = {()=> handleClick(5)} value = {newValue[5]} />
      </div>
      <div className="row">
        <Square onClick = {()=> handleClick(6)} value = {newValue[6]} />
        <Square onClick = {()=> handleClick(7)} value = {newValue[7]} />
        <Square onClick = {()=> handleClick(8)} value = {newValue[8]} />
      </div>
    </div>
  );
}

export default TicTacToe;
