import { useState, useEffect } from 'react';


function Recomendation(props) {
	
	function change(selectWord){
        const txt = document.getElementById('text');
        const words = txt.value.trim().split(' ');
        words.pop();
        words.push(selectWord.trim());
        txt.value = words.join(' ');
	}

    return (
        <div className='left'>
            <label>Definition: </label><br/>
            <p id='definition'>{props.definition}</p>
            <label>Synonyms: </label><br/>
            <ul id='synonym_list'>
            {
                props.synonyms.map(synonym =>(
                    <li key={synonym} className="synonym" onClick={e => change(e.target.innerHTML)  }> {synonym}</li>
                ))
            }
            </ul>
        </div>
    );
}

export default Recomendation;