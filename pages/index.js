import { solve } from "./calc.js";
import Head from "next/head";
import React, {useState} from "react"

function Calculator({initialAns}) {
    const [ans, setAns] = useState(initialAns)
    const [list, setList] = useState([])
    var inputValue = "";
    function handleInput(evt) {
        inputValue = evt.target.value;
        console.log(inputValue)
    }
    function handleEnter() {
            //handleSub()
    }
    function handleSub() {
        var outp = solve(inputValue);
        var comboVal = inputValue + " = " + outp[0];
        list.push(comboVal)
        setList(list);
        setAns(outp[0]);
    }
    
    var divList = []; var i = 0;
    list.forEach(combo => {
        i++;
        divList.unshift(<div className="combo" key={i}>{combo}</div>);
    });
    return (
        <div id="mainbox">
            <Head>
                <title>TDOP Calculator</title>
            </Head>
            <main>
            <table id="history">
                <tbody>
                    <tr>
                        <td>
                            <div id="previous">
                            {divList}
                            </div>
                            
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td id="solution">{ans}</td>
                    </tr>
                </tfoot>
            </table>
            <table id="calc">
                <thead>
                    <tr>
                        <td id="input" colSpan="6">
                            <input onKeyPress={handleEnter} type="text" id="stuf" placeholder="Type your expression here." onChange={evt => handleInput(evt)}></input>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="button" className="number"><button className="inp">1</button></td>
                        <td className="button" className="number"><button className="inp">2</button></td>
                        <td className="button" className="number"><button className="inp">3</button></td>
                        <td className="button"><button className="inp">sin</button></td>
                        <td className="button"><button className="inp">pi</button></td>
                        <td className="button"><button className="inp">clear</button></td>
                    </tr>
                    <tr>
                        <td className="button" className="number"><button className="inp">4</button></td>
                        <td className="button" className="number"><button className="inp">5</button></td>
                        <td className="button" className="number"><button className="inp">6</button></td>
                        <td className="button"><button className="inp">cos</button></td>
                        <td className="button"><button className="inp">^</button></td>
                        <td className="button"><button className="inp">(</button></td>
                    </tr>
                    <tr>
                        <td className="button" className="number"><button className="inp">7</button></td>
                        <td className="button" className="number"><button className="inp">8</button></td>
                        <td className="button" className="number"><button className="inp">9</button></td>
                        <td className="button"><button className="inp">tan</button></td>
                        <td className="button"><button className="inp"></button></td>
                        <td className="button"><button className="inp">)</button></td>
                    </tr>
                    <tr className="options">
                        <td className="button"><button className="inp">+</button></td>
                        <td className="button"><button className="inp">-</button></td>
                        <td className="button"><button className="inp">*</button></td>
                        <td className="button"><button className="inp">/</button></td>
                        <td className="button"><button className="inp">ans</button></td>
                        <td className="button" id="equals"><button className="inp" onClick={handleSub}>=</button></td>
                    </tr>
                </tbody>
            </table>
            </main>
        </div>
        
    )
}
export default Calculator;