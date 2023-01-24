import BringName from './components/Name/BringName';

import './styles/App.css'

function App() {

	return (
		<div className="App">

			<header>

				<h2>Amigo Secreto</h2>

				<input
					type="text" autoComplete="off" 
					placeholder="Escrever task..." 
					name="task"
					className="input"
				/>

				<button type="submit" className="btn-header">Adicionar Nome</button>
			</header>
			
			<div className="line"></div>

			<BringName />
			
		</div>
	);
}

export default App;