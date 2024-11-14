import React from "react";
import './progressBar.css'

function ProgressBar({ progress }) {
    return (
        <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
            <span className="progress-text">{Math.round(progress)}%</span>
        </div>
    );
}


export default ProgressBar;