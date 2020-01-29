import React from 'react';
import '../App.css';

const CheckBox = (props) => {
    return (
        <div className="row">
            <label className="rocker">
                <input onClick={props.handleCheckBox} type="checkbox" />
                <span className="switch-left">Synth</span>
                <span className="switch-right">Drum</span>
            </label>
        </div>
    );
}

export default CheckBox;