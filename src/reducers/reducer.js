const initialState = {
    mensaje: '' ,
    estado: true ,
};

/* Estado inicial */

export default (state = initialState, action) => {
    let newStore;
    switch(action.type) {
        case 'setMessage':
            newStore = Object.assign({},state, {...state , mensaje : state.mensaje = action.payload})
            return newStore;
        case 'changeEstado':
            newStore = Object.assign({},state, {...state , estado : state.estado = !(state.estado)})
            return newStore;    
        default:
           return state;
    }
}