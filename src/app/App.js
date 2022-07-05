import { useState, useEffect } from 'react';
import AnimeService from '../service/AnimeService';

import './App.css';

// class App extends Component {
// 	state = {
// 		data: []
// 	}

// 	animeService = new AnimeService();

// 	componentDidMount() {
// 		this.animeService
// 			.getCharacter()
// 			.then(({ data }) => {
// 				this.setState(({
// 					data: data
// 				}))
// 			})
// 	}

// 	render() {
// 		const { data } = this.state;

// 		console.log(data)

// 		const char = data.map(item => {
// 			return (
// 				<h2>{item.attributes.slug}</h2>
// 			)
// 		})

// 		return (
// 			<div className="App">
// 				<header className="App-header">
// 					<h1>Hello</h1>
// 					{char}
// 				</header>
// 			</div>
// 		);
// 	}
// }

// export default App;

const App = () => {

	const [data, setData] = useState([]);
	const [offset, setOffset] = useState(5);

	useEffect(() => {
		const animeService = new AnimeService();

		animeService
			.getCharacter(offset)
			.then(({ data }) => {
				setData(data)
			});

		console.log('dsd')

	}, [offset]);

	function onCharacters(i) {
		setOffset(offset + i);
	}

	const name = data.map(item => {
		return (
			<h2 key={item.id} id={item.id}>{item.attributes.slug}</h2>
		)
	})

	return (
		<div className="App">
			<header className="App-header">
				<h1>Hello</h1>
				{name}
				<div className="btns" style={{ display: 'flex' }}>
					<button onClick={() => onCharacters(-5)}>Prev</button>
					<button onClick={() => onCharacters(5)}>Next</button>
				</div>
			</header>
		</div>
	);
}

export default App;