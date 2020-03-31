let state = {
    token: null
}


const setToken = (token) => {
    state.token = token;
    localStorage.setItem('token', token);
}

const getToken = () => {
    const token = state.token ? state.token :
        localStorage.getItem('token') ? localStorage.getItem('token') :
            null;
    return token;
}

const isLogin = () => {
    return state.token || localStorage.getItem('token');
}

const authHeader = () => {
    if (isLogin()) {
        return { 'Authorization': getToken() }
    } else {
        return {};
    }
}
export { setToken, getToken, isLogin, authHeader };