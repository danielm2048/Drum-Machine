import React from 'react';
import '../App.css';
import DrumPad from './DrumPad'

class DrumPadContainer extends React.Component {
    render() {
        return (
            <div className="padContainer">
                <div className="row">
                    <DrumPad let="Q" disp={this.props.changeDisp} vol={this.props.volume} audios={this.props.audios} />
                    <DrumPad let="W" disp={this.props.changeDisp} vol={this.props.volume} audios={this.props.audios} />
                    <DrumPad let="E" disp={this.props.changeDisp} vol={this.props.volume} audios={this.props.audios} />
                </div>
                <br />
                <div className="row">
                    <DrumPad let="A" disp={this.props.changeDisp} vol={this.props.volume} audios={this.props.audios} />
                    <DrumPad let="S" disp={this.props.changeDisp} vol={this.props.volume} audios={this.props.audios} />
                    <DrumPad let="D" disp={this.props.changeDisp} vol={this.props.volume} audios={this.props.audios} />
                </div>
                <br />
                <div className="row">
                    <DrumPad let="Z" disp={this.props.changeDisp} vol={this.props.volume} audios={this.props.audios} />
                    <DrumPad let="X" disp={this.props.changeDisp} vol={this.props.volume} audios={this.props.audios} />
                    <DrumPad let="C" disp={this.props.changeDisp} vol={this.props.volume} audios={this.props.audios} />
                </div>
            </div>
        );
    }
}

export default DrumPadContainer;