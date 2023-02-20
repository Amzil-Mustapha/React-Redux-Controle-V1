import * as React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {add_stagiaire_action} from "../config/actions";
import {Link, useNavigate} from "react-router-dom";
import Menu from "./Menu";

const Ajout = () => {
    const [num, setNum] = useState('')
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [date, setDate] = useState('')
    const [groupe, setGroupe] = useState('ADI201')
    const [sexe, setSexe] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const clickHandler = () => {
        setNum('')
        setNom('')
        setPrenom('')
        setDate('')
        setGroupe('')
        setSexe('')
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(add_stagiaire_action({num, nom, prenom, date, groupe, sexe}))
        navigate('/consultation')
    }

    return (<>
        <div>
            <Menu page={'ajout'}/>
        </div>
        <br/><br/>
        <form onSubmit={submitHandler}>
            <label>Num Stagaire:</label>
            <input type="text" value={num} onChange={(e) => setNum(e.target.value)} required/>
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
                       onChange={(e) => setSexe(e.target.value)}/>
                <label>Masculin</label>

                <input type="radio"
                       name={'sexe'}
                       value={'feminin'}
                       onChange={(e) => setSexe(e.target.value)}/>
                <label>Feminin</label>

            </label>
            <br/><br/>
            <button type={'submit'}>AJOUTER</button>
            <button type={'button'} onClick={clickHandler}>NOUVEAU</button>


        </form>
    </>);
};

export default Ajout