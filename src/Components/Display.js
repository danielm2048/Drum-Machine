import React from 'react';
import '../App.css';

const Display = (props) => {
    return (
        <div id="display" className="row">
            <p className="display">{props.display}</p>
        </div>
    );
}

export default Display;