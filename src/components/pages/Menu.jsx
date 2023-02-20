import * as React from 'react';
import {Link} from "react-router-dom";


const Menu = ({page}) => {

    const divStyle = {
        border: '1 solid gray',
        display: 'flex',
        height: '50px',
        backgroundColor: '#007185',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }

    let linkAcc = {
        fontSize: '15px',
        color: 'white',
        textDecoration: 'none'
    }
    let linkMaj = {
        fontSize: '15px',
        color: 'white',
        textDecoration: 'none'
    }
    let linkConsu = {
        fontSize: '15px',
        color: 'white',
        textDecoration: 'none'
    }
    let linkAjout = {
        fontSize: '15px',
        color: 'white',
        textDecoration: 'none'
    }
    const cssFun = () => {
        if (page === 'accueil') {
            linkAcc =
                {
                    fontSize: '25px',
                    color: 'black',
                    textDecoration: 'none'
                }
        }
        if (page === 'ajout') {
            linkAjout =
                {
                    fontSize: '25px',
                    color: 'black',
                    textDecoration: 'none'
                }
        }
        if (page === 'consu') {
            linkConsu =
                {
                    fontSize: '25px',
                    color: 'black',
                    textDecoration: 'none'
                }
        }
        if (page === 'maj') {
            linkMaj =
                {
                    fontSize: '25px',
                    color: 'black',
                    textDecoration: 'none'
                }
        }

    }
    return (
        <div style={divStyle}>
            {cssFun()}
            <Link style={linkAcc} to={'/'}>ACCUEIL</Link>
            <Link style={linkAjout} to={'/ajout'}>AJOUTER</Link>
            <Link style={linkConsu} to={'/consultation'}>CONSULTATION</Link>
            <Link style={linkMaj} to={'/maj'}>MAJ</Link>
        </div>
    );
};

export default Menu
