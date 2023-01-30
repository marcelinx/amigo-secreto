
import { Iname } from '../../Interfaces';
import './styles.css'

interface NameProps {
    name: Iname,
    deleteName(DeleteNameById: number): void,
}

function BringName({ name, deleteName }: NameProps ) {
	
	return (
		<div className="card">
			<div>
                <p>{name.name}</p>
            </div>

            <div className="line2" >
            <span className="btn-card" onClick={() => deleteName(name.id)}>Remover nome</span>
            </div>
		</div>
	);
}

export default BringName;