import * as React from 'react';
import Menu from "./Menu";


const Accueil = () => {

    const divStyle = {
        border: '2px solid black',
        borderRadius: '10px',
        width: '80%',
        height: 'fit-content',
        margin: 'auto',
        transform : 'translate(0, 50%)',
        backgroundColor: 'rgb(176, 187, 255)',
        padding: '10px',
        fontFamily: 'arial',

    }

    return (
        <div >
            <Menu page={'accueil'}/>
            <div style={divStyle}>
                <h2>INSTRUCTIONS GÉNÉRALES SUR L'UTILISATION DU SITE</h2>
                <br/>
                <p><p>Pour ajouter un stagiaire, cliquez sur le mot "<mark>AJOUTER</mark>" <b>dans l'en-tête</b>.</p>
                    <p>Pour voir les différents stagiaires, cliquez sur le mot "<mark>CONSULTATION</mark>".</p>
                   <p> Pour supprimer un stagiaire ou rechercher un stagiaire, cliquez sur le mot "<mark>MAJ</mark>". Notez que tous les
                       stagiaires dont le numéro apparaît dans la liste déroulante. Lorsque vous choisissez un stagiaire,
                       ses informations apparaissent immédiatement</p>
                </p>
                <br/>
                <small>Mustapha Amzil &copy;</small>
            </div>
        </div>
    );
};

export default Accueil