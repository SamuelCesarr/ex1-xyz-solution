import './Appli.scss';
import Entete from './Entete.jsx';
import ListeCategories from './ListeCategories.jsx';
import TableauProduits from './TableauProduits.jsx';

function Appli() {

  return (
    <div className='Appli'>
      <Entete />
      <ListeCategories />
      <TableauProduits />
    </div>
  )
}

export default Appli;
