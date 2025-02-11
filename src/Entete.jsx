import './Entete.scss';

function Entete() {
    return (
        <header className="Entete">
            <span>xYz</span>
            <span>ADMIN</span>
            <input type="search" />
            <input type="button" name="connexion" id="connexion" value="Connexion" />
            <input type="button" name="inscription" id="inscription" value="Inscription" />
    </header>
    );
}

export default Entete;