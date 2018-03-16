const initialState = {
    mensaje: '' 
};

/* Estado inicial */

export default (state = initialState, action) => {
    let newStore;
    switch(action.type) {
        case 'setMessage':
            newStore = Object.assign({},state, {...state , mensaje : state.mensaje = action.payload})
            return newStore;
        default:
           return state;
    }
}