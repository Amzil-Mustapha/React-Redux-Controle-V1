const initialState = {
    stagiaires: [
        {
            num: 1, nom: 'Mustapha', prenom: 'Amzil', date: '1999-06-02', groupe: 'ADI201', sexe: 'masculin'
        },
        {
            num: 2, nom: 'Ali', prenom: 'AliAli', date: '2023-02-01', groupe: 'ADI201', sexe: 'masculin'
        }

    ]
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_STAGIAIRE':
            return {...state, stagiaires: [...state.stagiaires, action.payload]}
        case 'UPDATE_STAGIAIRE':
            const {num, nom, prenom, date, groupe, sexe} = action.payload
            const stagiaire = state.stagiaires.find((s) => s.num === parseInt(num))
            if (stagiaire) {
                stagiaire.nom = nom
                stagiaire.prenom = prenom
                stagiaire.date = date
                stagiaire.groupe = groupe
                stagiaire.sexe = sexe
            }
            return state
        case 'DELETE_STAGIAIRE':
            return {...state, stagiaires: [...state.stagiaires.filter((e) => e.num !== parseInt(action.payload))]}
        default :
            return state
    }
}

export default reducer