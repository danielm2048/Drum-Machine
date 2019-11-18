import React from 'react';
import './App.css';
import { audios } from './audioModule.js';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePressKey = this.handlePressKey.bind(this);
  }
  handleClick() {
    this.clip.volume = (this.props.vol / 100);
    this.clip.load();
    this.clip.play();
    this.props.disp(audios[this.props.let][1]);
  }
  handlePressKey(event) {
    if (String.fromCharCode(event.keyCode).toUpperCase() === this.props.let) {
      event.preventDefault();
      this.button.click();
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handlePressKey);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handlePressKey);
  }
  render() {
    return (
      <div className="col-md-4">
        <button className="btn btn-default drum-pad" ref={input => { this.button = input }} id={this.props.let} onClick={this.handleClick}>
          {this.props.let}
          <audio className="clip" ref={input => { this.clip = input }} id={this.props.let} src={audios[this.props.let][0]} />
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Play it!",
      volume: 50
    };
    this.changeDisp = this.changeDisp.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }
  changeDisp(disp) {
    this.setState({
      display: disp
    });
  }
  handleVolumeChange(event) {
    let rangeSlider = event.target;
    this.setState({
      display: "Volume is: " + rangeSlider.value,
      volume: rangeSlider.value
    });
    if (rangeSlider.value <= 5) {
      rangeSlider.className = "noVolume";
    }
    else if (rangeSlider.value > 5 && rangeSlider.value <= 25) {
      rangeSlider.className = "volume1";
    }
    else if (rangeSlider.value > 25 && rangeSlider.value <= 75) {
      rangeSlider.className = "volume2";
    }
    else if (rangeSlider.value > 75) {
      rangeSlider.className = "volume3";
    }
  }
  render() {
    return (
      <div id="drum-machine" className="container-fluid">
        <div className="row">
          <h1>Drum Machine</h1>
        </div>
        <br />
        <div id="display" className="row">
          <p className="display">{this.state.display}</p>
        </div>
        <br />
        <div className="row">
          <DrumPad let="Q" disp={this.changeDisp} vol={this.state.volume} />
          <DrumPad let="W" disp={this.changeDisp} vol={this.state.volume} />
          <DrumPad let="E" disp={this.changeDisp} vol={this.state.volume} />
        </div>
        <br />
        <div className="row">
          <DrumPad let="A" disp={this.changeDisp} vol={this.state.volume} />
          <DrumPad let="S" disp={this.changeDisp} vol={this.state.volume} />
          <DrumPad let="D" disp={this.changeDisp} vol={this.state.volume} />
        </div>
        <br />
        <div className="row">
          <DrumPad let="Z" disp={this.changeDisp} vol={this.state.volume} />
          <DrumPad let="X" disp={this.changeDisp} vol={this.state.volume} />
          <DrumPad let="C" disp={this.changeDisp} vol={this.state.volume} />
        </div>
        <br />
        <div className="">
          <input type="range" min="1" max="100" value={this.state.volume} onChange={this.handleVolumeChange} className="volume2" id="volumeRange" />
        </div>
        <div>
          <h5>
            Made by Daniel Mimoun
          </h5>
        </div>
      </div>
    );
  }
}

export default App;
