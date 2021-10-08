import { solve } from "./calc.js";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleSub = this.handleSub.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.state = { ans:"", inputValue: "", list:[] };
  }
  handleInput(evt) {
    this.setState({inputValue:evt.target.value});
  }
  handleEnter = (event) => {
      if(event.key === "Enter") {
          this.handleSub()
      }
  }
  handleSub() {
    var outp = solve(this.state.inputValue);
    var comboVal = this.state.inputValue + " = " + outp[0];
    var tlist = this.state.list;
    this.el.scrollIntoView({behavior:"smooth"})
    tlist.push(comboVal);
    this.setState({list:tlist});
    this.setState({ans:outp[0]});
  }

  render() {
        var divList = []; var i = 0;
        console.log(this.state) 
        this.state.list.forEach(combo => {
            i++;
            divList.push(<div className="combo" key={i}>{combo}</div>);
        });
    return (
        <div id="mainbox">
            <table id="history">
                <tbody>
                    <tr>
                        <td>
                            <div id="previous">
                            {divList}
                            <div ref={el => {this.el = el}}></div>
                            </div>
                            
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr >
                        <td id="solution">{this.state.ans}</td>
                    </tr>
                </tfoot>
            </table>
            <table id="calc">
                <thead>
                    <tr>
                        <td id="input" colSpan="6"><input onKeyPress={this.handleEnter} type="text" id="stuf" placeholder="Type your expression here." value={this.state.inputValue} onChange={evt => this.handleInput(evt)}></input></td>
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
                        <td className="button" id="equals"><button className="inp" onClick={this.handleSub}>=</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
  }
}
class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    sub() {
        this.set
    }
    render() {
        return (
            <button className="inp" onClick={this.sub}>=</button>
        )
    }

}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Calculator />, domContainer);