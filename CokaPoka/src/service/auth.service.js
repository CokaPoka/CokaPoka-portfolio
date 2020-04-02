let state = {
    token: null,
    id: null
}
const deleteToken = () => {
    return new Promise((resolve) => {
        state.token = null;
        localStorage.removeItem('token');
        resolve();
    });
}

const setToken = (token) => {
    state.token = token;
    localStorage.setItem('token', token);
}
const setId = id => {
    state.id = id;
    localStorage.setItem("id", id);
};
const getId = () => {
    const id = state.id ? state.id :
        localStorage.getItem('id') ? localStorage.getItem('id') :
            null;
    return id;
}

const getToken = () => {
    const token = state.token ? state.token :
        localStorage.getItem('token') ? localStorage.getItem('token') :
            null;
    return token;
}

const isLogin = () => {
    // return true;
    return state.token || localStorage.getItem('token');
}

// const authHeader = () => {
//     if (isLogin()) {
//         return { 'Authorization': getToken() }
//     } else {
//         return {};
//     }
// }
export { setToken, getToken, isLogin, deleteToken, setId, getId };