import React from 'react';
import Searchbar from "../Searchbar/Searchbar.jsx";

function Trackpage() {
    return (
        <div className = 'trackpage-container'>
            <Searchbar/>
            <div>SearchResults</div>
        </div>
    );
}

export default Trackpage;