import { solve } from "../public/calc.js";
import Head from "next/head";
import React, {useState} from "react"

function Calculator({initialAns,initialValue}) {
    const [ans, setAns] = useState(initialAns);
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    function handleInput(evt) {
        setInputValue(evt.target.value);
    }
    function handleButton(inp) {
        switch (inp) {
            case "clr":
                setInputValue("");
                break;
            default:
                console.log(inputValue+inp);
                setInputValue(inputValue+inp);
                break;
        }
    }
    function handleEnter(evt) {
        if (evt.code==="Enter") {
            handleSub();
        }
    }
    function handleSub() {
        var outp = solve(inputValue, ans);
        var comboVal = inputValue + " = " + outp[0];
        list.push(comboVal);
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
                            <input onKeyPress={evt => handleEnter(evt)} type="text" id="stuf" placeholder="Type your expression here." value={inputValue} onChange={evt => handleInput(evt)}></input>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="button"><button className="inp" onClick={evt => handleButton("+")}>+</button></td>
                        <td className="button" className="number"><button className="inp" onClick={evt => handleButton("1")}>1</button></td>
                        <td className="button" className="number"><button className="inp" onClick={evt => handleButton("2")}>2</button></td>
                        <td className="button" className="number"><button className="inp" onClick={evt => handleButton("3")}>3</button></td>
                        <td className="button"><button className="inp" onClick={evt => handleButton("clr")}>clear</button></td>
                    </tr>
                    <tr>
                        <td className="button"><button className="inp" onClick={evt => handleButton("-")}>-</button></td>
                        <td className="button" className="number"><button className="inp" onClick={evt => handleButton("4")}>4</button></td>
                        <td className="button" className="number"><button className="inp" onClick={evt => handleButton("5")}>5</button></td>
                        <td className="button" className="number"><button className="inp" onClick={evt => handleButton("6")}>6</button></td>
                        <td className="button"><button className="inp" onClick={evt => handleButton("(")}>(</button></td>
                    </tr>
                    <tr>
                        <td className="button"><button className="inp" onClick={evt => handleButton("*")}>×</button></td>
                        <td className="button" className="number"><button className="inp" onClick={evt => handleButton("7")}>7</button></td>
                        <td className="button" className="number"><button className="inp" onClick={evt => handleButton("8")}>8</button></td>
                        <td className="button" className="number"><button className="inp" onClick={evt => handleButton("9")}>9</button></td>
                        <td className="button"><button className="inp" onClick={evt => handleButton(")")}>)</button></td>
                    </tr>
                    <tr className="options">
                        <td className="button"><button className="inp" onClick={evt => handleButton("/")}>÷</button></td>
                        <td className="button"><button className="inp" onClick={evt => handleButton("p")}>π</button></td>
                        <td className="button"><button className="inp" onClick={evt => handleButton("^")}>^</button></td>
                        <td className="button"><button className="inp" onClick={evt => handleButton("a")}>ans</button></td>
                        <td className="button" id="equals"><button className="inp" onClick={evt => handleSub()}>=</button></td>
                    </tr>
                    <tr className="options">
                        <td className="button"><button className="inp" onClick={evt => handleButton("s")}>sin</button></td>
                        <td className="button"><button className="inp" onClick={evt => handleButton("c")}>cos</button></td>
                        <td className="button"><button className="inp" onClick={evt => handleButton("t")}>tan</button></td>
                        <td className="button"><button className="inp" onClick={evt => handleButton("e")}>×10^</button></td>
                        <td className="button"><button className="inp" onClick={evt => handleButton("")}>log (wip)</button></td>
                    </tr>
                </tbody>
            </table>
            </main>
        </div>
        
    )
}
export default Calculator;