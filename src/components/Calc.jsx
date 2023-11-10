import { click } from "@testing-library/user-event/dist/click"
import React from "react"
import { useState } from "react"

function Calc(){
  const [inputValue , setInputValue] = useState("")
   const show = (value)=>{
    setInputValue(inputValue + value)
   }

   const clearInput = ()=> {
    setInputValue("")
   }

   const calc = ()=> {
    const result = eval(inputValue)
    setInputValue(result)
   }

  
    return (
        <div className="calcContainer">
          <input type="text" className="input-value" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />

          
          <span onClick={()=>show("1")}>1</span>
          <span onClick={()=>show("2")}>2</span>
          <span onClick={()=>show("3")}>3</span>
          <span className="plus" onClick={()=>show("+")}>+</span>

         
          <span onClick={()=>show("4")}>4</span>
          <span onClick={()=>show("5")}>5</span>
          <span onClick={()=>show("6")}>6</span>

          <span onClick={()=>show("*")}>x</span>

          <span onClick={()=>show("7")}>7</span>
          <span onClick={()=>show("8")}>8</span>
          <span onClick={()=>show("9")}>9</span>

          <span onClick={()=>show("-")}>-</span>
          <span onClick={()=>show("%")}>%</span>
          <span onClick={()=>show("0")}>0</span>
          <span onClick={()=>show(".")}>.</span>

          <span onClick={()=>show("/")}>/</span>
         
          
          <span className="clear" onClick={()=>clearInput()}>Ac</span>

          <span onClick={()=>show("00")}>00</span>
          <span className="equal" onClick={()=>calc()} >=</span>
         

        

        </div>
    )
}


export default Calc