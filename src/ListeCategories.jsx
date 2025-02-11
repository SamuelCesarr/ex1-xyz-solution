//Importer le css du composant
import './ListeCategories.scss';
import Categorie from './Categorie.jsx';

import Categories from './data/categories.json';


function ListeCategories() {
    return (
                <ul>       
                {
                Categories.map(
                    (uneCategorie) => <Categorie key={uneCategorie.id} {...uneCategorie}/>
                )
                }       
                </ul>  
            
    )
}

export default ListeCategories;