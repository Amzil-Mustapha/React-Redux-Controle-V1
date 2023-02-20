import * as React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Accueil from "./pages/Accueil";
import Ajout from "./pages/Ajout";
import Consultation from "./pages/Consultation";
import Maj from "./pages/MAJ";

const Root = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Accueil/>}/>
                <Route path={'/ajout'} element={<Ajout/>}/>
                <Route path={'/consultation'} element={<Consultation/>}/>
                <Route path={'/maj'} element={<Maj/>}/>
            </Routes>
        </BrowserRouter>

    );
};

export default Root