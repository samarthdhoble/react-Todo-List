import { useState } from "react"

export default function LudoBoard(){

  let [moves , setMoves] = useState({blue : 0 , red : 0 , yellow :0 , green : 0})

  let updateBlue = ()=>{
    setMoves((preMoves)=>{
      return {...preMoves , blue : preMoves.blue + 1}
    })
  }

  let updateYellow = ()=>{
    setMoves((preMoves)=>{
      return {...preMoves , yellow : preMoves.yellow + 1}
    })
  }

  let updateRed = ()=>{
    setMoves((preMoves)=>{
      return {...preMoves , red : preMoves.red + 1}
    })
  }

  let updateGreen = ()=>{
    setMoves((preMoves)=>{
      return {...preMoves , green : preMoves.green + 1}
    })
  }
  // same for array

  return (
    <div>
      <h3>Game begins !!</h3>
      <div>
        <p>Blue moves = {moves.blue}</p>
        <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
        <p>Red moves = {moves.red}</p>
        <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
        <p>Green moves = {moves.green}</p>
        <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
        <p>Yellow moves = {moves.yellow}</p>
        <button style={{backgroundColor:"yellow"}} onClick={updateYellow  }>+1</button>
      </div>
    </div>
  )
}