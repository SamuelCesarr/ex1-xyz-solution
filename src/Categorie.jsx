import './Categorie.scss';

function Categorie({nom, couleur}) {
    return (
        
            <li className="nom" style={{backgroundColor: couleur}}>{nom}</li>
    )
}

export default Categorie;