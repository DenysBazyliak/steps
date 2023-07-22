import {useState} from "react";

import {BiLogoReact} from "react-icons/bi";

import "./App.css"

function App() {
    const [step, setStep] = useState(1)

    const steps = {
        1: "Step 1: Learn React ",
        2: "Step 2: Fuck  React ",
        3: "Step 3: Be useful ",
        4: "Step 3: suck dick Viktor ",
    }
    function setNumberOfState(number){
        return setStep(step +number)
    }

    const numbers = Object.keys(steps).map((number) => {
        return (
            <div className={step >= Number(number) ? "number selected" : "number"}>{number}</div>
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
                <button className={"button"} onClick={()=>setNumberOfState(-1)}>Previous</button>
                <button className={"button"} onClick={() => setNumberOfState( 1)}>Next</button>
            </div>
        </div>
    );
}

export default App;
