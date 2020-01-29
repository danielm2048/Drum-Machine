import React from 'react';
import '../App.css';

class VolumeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            volume: 50
        };
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
    }

    handleVolumeChange(event) {
        let rangeSlider = event.target;
        this.setState({
            volume: rangeSlider.value
        });
        this.props.titleChange(rangeSlider.value);
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
            <div className="row">
                <input type="range" min="1" max="100" value={this.state.volume} onChange={this.handleVolumeChange} className="volume2" id="volumeRange" />
            </div>
        );
    }
}

export default VolumeSlider;