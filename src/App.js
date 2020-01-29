import React, { createRef } from 'react';
import './App.css';
import { audiosDrum, audiosSynth } from './audioModule.js';
import DrumPadContainer from './Components/DrumPadContainer';
import VolumeSlider from './Components/VolumeSlider';
import MadeBy from './Components/MadeBy';
import Display from './Components/Display';
import CheckBox from './Components/CheckBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Press the buttons or hit that keyboard!",
      volume: 50,
      audios: audiosDrum
    };
    this.changeDisp = this.changeDisp.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.title = createRef();
  }
  changeDisp(disp) {
    this.setState({
      display: disp
    });
  }
  handleVolumeChange(value) {
    this.setState({
      display: "Volume is: " + value,
      volume: value
    });
  }
  handleCheckBox(e) {
    this.title.innerHTML = e.target.checked ? "Synth Machine" : "Drum Machine";
    this.setState({
      audios: e.target.checked ? audiosSynth : audiosDrum
    });
  }
  render() {
    return (
      <div id="drum-machine" className="container-fluid">
        <div className="row">
          <h1 ref={input => { this.title = input }}>Drum Machine</h1>
        </div>
        <CheckBox handleCheckBox={this.handleCheckBox} />
        <br />
        <Display display={this.state.display} />
        <br />
        <DrumPadContainer changeDisp={this.changeDisp} volume={this.state.volume} audios={this.state.audios} />
        <br />
        <VolumeSlider display={this.state.display} titleChange={this.handleVolumeChange} />
        <br />
        <MadeBy />
      </div>
    );
  }
}

export default App;
