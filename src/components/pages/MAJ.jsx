import * as React from 'react';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {delete_stagiaire_action, update_stagiaire_action} from "../config/actions";
import Menu from "./Menu";


const Maj = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stagiaires = useSelector((state) => state.stagiaires)
    const [num, setNum] = useState('')
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [date, setDate] = useState('')
    const [groupe, setGroupe] = useState('ADI201')
    const [sexe, setSexe] = useState('masculin')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(update_stagiaire_action({num, nom, prenom, date, groupe, sexe}))
        navigate('/consultation')
    }
    const selectChangehandler = (e) => {
        if (e) {
            const stagiaire = stagiaires.find((stagiaire) => {
                return stagiaire.num === parseInt(e)
            })
            setNum(e)
            setNom(stagiaire.nom)
            setPrenom(stagiaire.prenom)
            setDate(stagiaire.date)
        } else {
            setNum('')
            setNom('')
            setPrenom('')
            setDate('')
        }

    }
    const deleteHandler = () => {
        if (num) {

            dispatch(delete_stagiaire_action(num))
            navigate('/consultation')
        } else {
            alert('Vous Devez Choisir Un Stagiare')
        }
    }
    return (
        <>
            <div>
                <Menu page={'maj'}/>
            </div>
            <br/><br/>
            <form onSubmit={submitHandler}>
                <label>Num Stagaire:</label>
                <select onChange={(e) => selectChangehandler(e.target.value)}>
                    <option value={''}>- select Stagiaire Number -</option>
                    {stagiaires.map((stagiaire, index) => {
                        return <option key={index} value={stagiaire.num}>- {stagiaire.num} -</option>
                    })}
                </select>
                <br/><br/>
                <label>Nom Stagaire:</label>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required/>
                <br/><br/>
                <label>Prenom Stagaire:</label>
                <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} required/>
                <br/><br/>
                <label>Nom Stagaire:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
                <br/><br/>
                <label>Groupe:</label>
                <select onChange={(e) => setGroupe(e.target.value)}>
                    <option value="ADI201">ADI201</option>
                    <option value="TSF302">TSF302</option>
                    <option value="GRT303">GRT303</option>
                    <option value="ADW404">ADW404</option>
                    <option value="RND302">RND302</option>
                </select>
                <br/><br/>
                <label>
                    <input type="radio"
                           name={'sexe'}
                           value={'masculin'}
                           onChange={(e) => setSexe(e.target.value)} checked/>
                    <label>Masculin</label>

                    <input type="radio"
                           name={'sexe'}
                           value={'feminin'}
                           onChange={(e) => setSexe(e.target.value)}/>
                    <label>Feminin</label>

                </label>
                <br/><br/>
                <button type={'submit'}>MODIFIER</button>
                -
                <button type={'button'}
                        onClick={deleteHandler}>
                    SUPPRIMER
                </button>
                -


            </form>

        </>
    );
};

export default Maj

