import { api } from './api';

export const login = (params) => {
    return api.post('/auth/login', params);
}

export const profile = (params) => {
    return api.get('/users/profile', params);
}

export const users = (params) => {
    const queryParams = '?' + new URLSearchParams(params).toString();
    return api.get('/users' + queryParams,);
}
