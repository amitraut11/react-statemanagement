import { setDefaultResultOrder } from "dns";
import React,{useState} from "react";

function Calc() {
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [operator,setOperator] = useState('+');
    const [result,setResult] = useState(0);

    const handleNum1Change = (event : React.ChangeEvent<HTMLInputElement>) => {

        setNum1(parseFloat(event.target.value))
    }

    const handleNum2Change = (event : React.ChangeEvent<HTMLInputElement>) => {

        setNum2(parseFloat(event.target.value))
    }

    const handleOperatorChange = (event : React.ChangeEvent<HTMLSelectElement>)=>
    {
        setOperator (event.target.value)
    }

    const handleCalculate = () => {

        let calcResult = 0;

        switch (operator)
        {
            case '+' :
                calcResult = num1+num2 ;
                break ;

            case '-' :
                calcResult = num1-num2 ;
                break ;

            case '*' :
                calcResult = num1*num2 ;
                break ;

            case '/' :
                calcResult = num1/num2 ;
                break ;

        }
        
        setResult(calcResult);
    }
    
    return (
        <div >
           <label>
            Enter First Number :
            <input type="number" value={num1} onChange={handleNum1Change} />
          </label>
          <br />

          <label>
            Enter Second Number :
            <input type="number" value={num2} onChange={handleNum2Change} />
          </label>
          <br />

          <label>
            Select Operations :
            <select value={operator} onChange= {handleOperatorChange}>
            <option value = "+" >+</option>
            <option value = "-" >-</option>
            <option value = "*" >*</option>
            <option value = "/" >/</option>
            </select>
          </label>
          <br />
          <button onClick={handleCalculate}>Calculate</button> 
            <br/>
            final result : {result}

        </div>
       
    )
}

export default Calc
