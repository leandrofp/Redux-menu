export const setMessage = (mensaje) => {
    return {
        type: 'setMessage',
        payload: mensaje
    };
}
export const changeEstado = () => {
    return {
        type: 'changeEstado',
    };
}
