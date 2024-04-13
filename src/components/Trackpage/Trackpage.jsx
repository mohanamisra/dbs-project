import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import { restClient } from '@polygon.io/client-js';
import Navbar from "../Navbar/Navbar.jsx";
import './Trackpage.css'

function Trackpage() {
    const rest = restClient('Ymu2WtW7IYPjySqMRwIzYP622FQKbvMp');
    const [input, setInput] = useState('');
    const [tickerName, setTickerName] = useState('---');
    const [opening, setOpening] = useState(0);
    const [closing, setClosing] = useState(0);
    const [prediction, setPrediction] = useState('---');

    const handleInputChange = (e) => {
        let value = e.target.value;
        setInput(value);
    }

    const handleSearchClick = () => {
        // fetchData(input);
        rest.crypto.rsi(input).then((data) => {
            console.log(data.results.values[0].value);
            let rsiValue = data.results.values[0].value;
            if(rsiValue <= 30)
                setPrediction('Buy')
            else if(rsiValue >= 70)
                setPrediction('Sell');
            else
                setPrediction('Hold');
        }).catch(e => {
            console.error('An error happened:', e);
        });
        rest.crypto.previousClose(input).then((data) => {
            console.log(`Closing Price = $${data.results[0].c} Opening Price = $${data.results[0].o}`);
            setOpening(data.results[0].o);
            setClosing(data.results[0].c);
            setTickerName(data.ticker);
        }).catch(e => {
            console.error('An error happened:', e);
        });
    }

    return (
        <>
            <Navbar/>
            <div className = 'trackpage-container'>
                <h1 className = 'trackpage-heading'>Track your Crypto Stock</h1>
                <div className='search-section'>
                    <input placeholder='Type to search...'
                           onChange={handleInputChange}
                           className='search-bar'/>
                    <button className='search-button' onClick={handleSearchClick}>
                        <FaSearch className='search-icon'/>
                    </button>
                </div>
                <div className='results-container'>
                    <div className='ticker col'>
                        <div className='th'>Ticker Name</div>
                        <div className='td'>{tickerName}</div>
                    </div>
                    <div className='opening col'>
                        <div className='th'>Opening Price</div>
                        <div className='td'>${opening}</div>
                    </div>
                    <div className='closing col'>
                        <div className='th'>Closing Price</div>
                        <div className='td'>${closing}</div>
                    </div>
                    <div className='prediction col'>
                        <div className='th'>Prediction</div>
                        <div className='td'>{prediction}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Trackpage