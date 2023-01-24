
import { Iname } from '../../Interfaces';
import './styles.css'

interface NameProps {
    name: Iname,
}

function BringName({ name }: NameProps ) {
	
	return (
		<div className="card">
			<div>
                <p>{name.name}</p>
            </div>

            <div className="line2" >
            <span className="btn-card">X</span>
            </div>
		</div>
	);
}

export default BringName;