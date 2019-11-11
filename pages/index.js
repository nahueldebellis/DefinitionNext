import { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Semantic from '../components/semantic';
import Recomendation from '../components/recomendation';

function App() {
	const [synonymList, setSynonym] = useState([""]);
	const [definition, setDefinition] = useState("");
	const [textValue, setTextValue] = useState("");
	const [tags, setTags] = useState([]);

	function recomendation(textarea) {
		setTextValue(textarea);
		const lastWord = txt => txt.split(' ').slice(-1);

		fetch('http://localhost:5000/words/'+lastWord(textarea))
		.then(res => {
			res.json()
			.then(data => {
				setDefinition(data['definition'] || "...");
				setSynonym(data['synonyms'] || []);
			})
		});
	};

	function sintaticAnalisis(){
		const txt = document.getElementById('text');
		fetch('http://localhost:5000/semantic/', {
			method: 'POST',
			body: txt.value,
		}).then(res => res.json().then(data => setTags(data['tags']) ));
	}

	return (
    	<div>
      		<Header/>
			<div className="row">
				<div className='left'>
					<textarea value={textValue} onChange={ text => recomendation(text.target.value) } rows="10" cols="100" id='text' placeholder="Write here"/><br/>
					<button onClick={sintaticAnalisis}>Get semantic</button>
				</div>
				<Recomendation definition={definition} synonyms={synonymList} />
			</div>
			<Semantic tags={tags}/>
			
      		<Footer/>
		</div>
	);
}

export default App;