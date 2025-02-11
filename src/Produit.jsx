import './Produit.scss';

function Produit({nom, image, categories, unites, ventes}) {
    return (
        <tr className="Produit">
            <td>
                <img src={image} alt="" />
                <span className="nom">{nom}</span>
            </td>
            <td><input type="button" name="modifier" id="modifier" value="Modifier" /></td>
            <td className="categories">
                {
                    categories.map(
                        cat => <span> {cat} </span>
                    )
                }
            </td>
            <td className="unites">{unites}</td>
            <td className="ventes">{ventes}$</td>
        </tr>
    )
}

export default Produit;