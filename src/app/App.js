import { Component } from 'react';
import AnimeService from '../service/AnimeService';

import './App.css';

class App extends Component {

	animeServise = new AnimeService();

	componentDidMount() {
		this.animeServise
			.getCharacter()
			.then(({ data }) => data.map(item => {
				console.log(item.attributes)
			}))
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Hello</h1>
				</header>
			</div>
		);
	}
}

export default App;
