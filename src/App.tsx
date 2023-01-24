
import { useState } from "react";
import BringName from './components/Name/BringName';

import './styles/App.css'
import { Iname } from './Interfaces';

function App() {

	const [name, setName] = useState("")

	const [nameList, setNameList] = useState<Iname[]>([])
//spread operator para definirmos ID para os nomes da lista
	function addName(){

		const idRandom = (num: number) => Math.floor(Math.random() * num)

		const newName = { id: idRandom(100), name: name }

		setNameList([...nameList, newName])
	}

	return (
		<div className="App">

			<header>

				<h2>Amigo Secreto</h2>

				<input
					type="text" autoComplete="off" 
					placeholder="Escrever nome..." 
					name="name"
					className="input"
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>

				<button type="submit" onClick={addName} className="btn-header">Adicionar Nome</button>
			</header>
			
			<div className="line"></div>

			{nameList.map((name, key) => (
				<BringName key={key} name={name} />
			))}
			
		</div>
	);
}

export default App;