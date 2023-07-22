import {useState} from "react";

import {BiLogoReact} from "react-icons/bi";

import "./App.css"

function App() {
    const [step, setStep] = useState(1)

    const steps = {
        1: "Step 1: Learn React ",
        2: "Step 2: Fuck  React ",
        3: "Step 3: Be useful ",
        4: "Step 4: suck dick Viktor ",
    }

    function setPrevious(){
        console.log("this is previous")
       if(step>1) {
           return setStep(step - 1)
       } else{
           console.log("steps can't be less than 1")
       }
    }
    function setNext(){
        console.log("this is next")
        if(step<Object.keys(steps).length) {
            return setStep(step + 1)
        } else{
            console.log(`steps can't be more than ${steps.length}`)
        }
    }

    const numbers = Object.keys(steps).map((number) => {
        return (
            <div key={number} className={step >= Number(number) ? "number selected" : "number"}>{number}</div>
        )
    })
    return (
        <div className="steps">
            <div className="numbers">
                <div className={"img"}>
                    <img src="https://i.imgur.com/k0uGGdl.png" alt="#"/>
                </div>
                {numbers}
            </div>
            <p className={"message"}>
                {steps[`${step}`]}<BiLogoReact className={"reactIcon"}/>
            </p>
            <div className={"buttons"}>
                <button className={"button"} onClick={()=>setPrevious()}>Previous</button>
                <button className={"button"} onClick={()=>setNext()}>Next</button>
            </div>
        </div>
    );
}

export default App;
