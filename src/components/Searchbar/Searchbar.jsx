import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import { restClient } from '@polygon.io/client-js';

function Searchbar() {
    const rest = restClient('Ymu2WtW7IYPjySqMRwIzYP622FQKbvMp');
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        let value = e.target.value;
        setInput(value);
    }

    const handleSearchClick = () => {
        // fetchData(input);
        rest.crypto.rsi(input).then((data) => {
            console.log(data.results.values[0].value);
        }).catch(e => {
            console.error('An error happened:', e);
        });
        rest.crypto.previousClose(input).then((data) => {
            console.log(`Closing Price = $${data.results[0].c} Opening Price = $${data.results[0].o}`);
        }).catch(e => {
            console.error('An error happened:', e);
        });
    }

    return (
        <div className = 'input-wrapper'>
            <input placeholder = 'Enter your crypto ticker...' onChange = {handleInputChange}/>
            <button className = 'search-button' onClick={handleSearchClick}>
                <FaSearch className = 'search-icon'/>
            </button>
        </div>
    );
}

export default Searchbar