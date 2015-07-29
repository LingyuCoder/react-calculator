import React from 'react';

export default class ButtonPanel extends React.Component {
  constructor() {
    super();
    this.keyMapping = {};
    this.onClick = this.onClick.bind(this);
  }
  onClick(event) {
    var target = event.target;
    target.classList.remove('clicked');
    setTimeout(() => {
      target.classList.add('clicked');
    }, 0);
    this.props.onClick(target.dataset.value);
  }
  componentDidMount() {
    var dom = React.findDOMNode(this);
    var buttons = dom.querySelectorAll('button');
    buttons = [].slice.call(buttons);
    buttons.forEach((button) => {
      this.keyMapping[button.dataset.code] = button;
    });

    window.onkeydown = (event) => {
      var button;
      var key = (event.shiftKey ? 'shift+' : '') + event.keyCode || event.which;
      if (button = this.keyMapping[key]) {
        button.click();
        event.stopPropagation();
        event.preventDefault();
      }
    };
  }
  render() {
    return (
      <div className="button-panel row">
        <div className="s3 column">
          <div className="s1 row">
            <button className="button s1" data-code="67" data-value="c" onClick={this.onClick}>C</button>
            <button className="button s1" data-code="8" data-value="back" onClick={this.onClick}>←</button>
            <button className="button s1" data-code="191" data-value="/" onClick={this.onClick}>÷</button>
          </div>
          <div className="s1 row">
            <button className="button s1" data-code="55" data-value="7" onClick={this.onClick}>7</button>
            <button className="button s1" data-code="56" data-value="8" onClick={this.onClick}>8</button>
            <button className="button s1" data-code="57" data-value="9" onClick={this.onClick}>9</button>
          </div>
          <div className="s1 row">
            <button className="button s1" data-code="52" data-value="4" onClick={this.onClick}>4</button>
            <button className="button s1" data-code="53" data-value="5" onClick={this.onClick}>5</button>
            <button className="button s1" data-code="54" data-value="6" onClick={this.onClick}>6</button>
          </div>
          <div className="s1 row">
            <button className="button s1" data-code="49" data-value="1" onClick={this.onClick}>1</button>
            <button className="button s1" data-code="50" data-value="2" onClick={this.onClick}>2</button>
            <button className="button s1" data-code="51" data-value="3" onClick={this.onClick}>3</button>
          </div>
          <div className="s1 row">
            <button className="button s2" data-code="48" data-value="0" onClick={this.onClick}>0</button>
            <button className="button s1" data-code="190" data-value="." onClick={this.onClick}>.</button>
          </div>
        </div>
        <div className="s1 column">
          <button className="button s1" data-code="shift+56" data-value="*" onClick={this.onClick}>×</button>
          <button className="button s1" data-code="189" data-value="-" onClick={this.onClick}>-</button>
          <button className="button s1" data-code="187" data-value="+" onClick={this.onClick}>+</button>
          <button className="button s2 button-equal" data-code="13" data-value="=" onClick={this.onClick}>=</button>
        </div>
      </div>
    );
  }
}
