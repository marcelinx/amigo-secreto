
import { useEffect, useState } from "react";
import BringName from './components/Name/BringName';

import { Iname } from './Interfaces';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/App.css'


function App() {

	const [name, setName] = useState("")

	const [listUptade, setlistUpdate] = useState(false)

	const [nameList, setNameList] = useState<Iname[]>([])
	//spread operator para definirmos ID para os nomes da lista

	useEffect(() => {

		if (listUptade) {
			localStorage.setItem("nameList", JSON.stringify(nameList))
		}

	}, [nameList])

	useEffect(() => {
		// @ts-ignore
		setNameList(JSON.parse(localStorage.getItem("nameList")))
	}, [])

	function addName() {

		if (name === "") {
			toast.error("Digite algum nome!")
		} else {

			const idRandom = (num: number) => Math.floor(Math.random() * num)

			const newName = { id: idRandom(100), name: name }

			setNameList([...nameList, newName])

			setlistUpdate(true)

			toast.success("Nome adicionado")
		}

	}
	function deleteName(DeleteNameById: number): void {
		setNameList(nameList.filter((realName) => realName.id !== DeleteNameById))
		setlistUpdate(true)
	}


	return (
		<div className="App">

			<ToastContainer
				autoClose={2000}
				pauseOnHover={false}
			/>

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
				<BringName key={key} name={name} deleteName={deleteName} />
			))}

		</div>
	);
}

export default App;