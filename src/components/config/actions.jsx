export const add_stagiaire_action = (user) => {
    return {type: 'ADD_STAGIAIRE', payload: user}
}

export const update_stagiaire_action = (user) => {
    return {type: 'UPDATE_STAGIAIRE', payload: user}
}

export const delete_stagiaire_action = (id) => {
    return {type: 'DELETE_STAGIAIRE', payload: id}
}