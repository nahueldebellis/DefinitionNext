import { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Semantic from '../components/semantic';
import Recomendation from '../components/recomendation';

function App() {
	const [synonymList, setSynonym] = useState([""]);
	const [definition, setDefinition] = useState("");
	const [textValue, setTextValue] = useState("");
	const [pdfUrl, setPdf] = useState([]);

	function recomendation(textarea) {
		setTextValue(textarea);
		getPDF(textarea);
		const lastWord = txt => txt.split(' ').slice(-1);

		fetch('https://apidefinition.herokuapp.com/words/'+lastWord(textarea))
		.then(res => {
			res.json()
			.then(data => {
				setDefinition(data['definition'] || "...");
				setSynonym(data['synonyms'] || ["..."]);
			})
		});
	};

	function getPDF(txt){
		fetch('http://localhost:5000/pdf/'+txt, {
			method: 'GET',
		}).then(res => res.blob()).then(data => setPdf(window.URL.createObjectURL(data)));
	}

	return (
    	<div className="container">
      		<Header/>
			<div className="row">
				<div className='col-sm-12 col-lg-6'>
					<textarea className="form-control" value={textValue} onChange={ text => recomendation(text.target.value) } id='text' placeholder="Write here"/><br/>
				</div>
				<Recomendation definition={definition} synonyms={synonymList} />
			</div>
			<a href={pdfUrl}>Download PDF!!!</a>
			
      		<Footer/>
			  <style jsx global >{`
					@font-face {
						font-family: myFirstFont;
						src: url(imperfecta.ttf);
					  
					  }
					  body{
						  background-color: rgb(31, 31, 31);
						  color:rgb(202,202,202);
						  font-family: myFirstFont;
						  margin-left:25px;
					  }
					  
					  .title, footer{
						  font-size: 60px;
						  font-weight: 900;
						  letter-spacing: -1px;
					  
						  margin:5px;
						  padding:10px;
					  }
					  
					  .synonym{
						  list-style-type: none; 
					  }

					  
					  body{ 
						  display:flex; 
						  flex-direction:column; 
					  }

					  
					  
				`}</style>
		</div>
	);
}

export default App;
