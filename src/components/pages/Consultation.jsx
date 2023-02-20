import * as React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Menu from "./Menu";


const Consultation = () => {
    const stagiaires = useSelector((state) => state.stagiaires)
    return (
        <>
            <div>
                <Menu page={'consu'}/>
            </div>
            <h1>Consultation - Liste Des Stagiaire</h1>
            <br/>
            <table border={1}>
                <thead>
                <tr>
                    <td>Num Stagiaire</td>
                    <td>Nom Stagiaire</td>
                    <td>Prenom Stagiaire</td>
                    <td>Date De Naissance</td>
                    <td>Groupe</td>
                    <td>Sexe</td>
                </tr>
                </thead>
                <tbody>

                {stagiaires.map((stagiaire, index) => {
                    return (
                        <tr key={index}>
                            <td>{stagiaire.num}</td>
                            <td>{stagiaire.nom}</td>
                            <td>{stagiaire.prenom}</td>
                            <td>{stagiaire.date}</td>
                            <td>{stagiaire.groupe}</td>
                            <td>{stagiaire.sexe}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <br/>

        </>

    );
};

export default Consultation