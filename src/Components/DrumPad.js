import React from 'react';
import '../App.css';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handlePressKey = this.handlePressKey.bind(this);
    }
    handleClick() {
        this.clip.volume = (this.props.vol / 100);
        this.clip.load();
        this.clip.play();
        this.props.disp(this.props.audios[this.props.let][1]);
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
            <div className="col-xs-4">
                <button className="btn btn-default drum-pad" ref={input => { this.button = input }} id={this.props.let} onClick={this.handleClick}>
                    {this.props.let}
                    <audio className="clip" ref={input => { this.clip = input }} id={this.props.let} src={this.props.audios[this.props.let][0]} />
                </button>
            </div>
        );
    }
}

export default DrumPad;