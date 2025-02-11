//Importer le css du composant
import './TableauProduits.scss';
import Produit from './Produit.jsx';

import Produits from './data/produits.json';

function TableauProduits() {
    return (
        <section className="tableau-produits">
        <table>
            <thead>
                <tr>
                    <th>Produit</th>
                    <th></th>
                    <th>Catégories</th>
                    <th>Unités</th>
                    <th>Ventes</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    Produits.map(
                        (unProduit) => <Produit key={unProduit.id} {...unProduit}/>
                    )
                }
                
            </tbody>
        </table>
        </section>
    )
}

export default TableauProduits;
