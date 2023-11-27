import { axiosInstance } from './api';

export const login = (params) => {
    return axiosInstance.post('/auth/login', params);
}

export const profile = (params) => {
    return axiosInstance.get('/users/profile', params);
}

export const users = (params) => {
    const queryParams = '?' + new URLSearchParams(params).toString();
    return axiosInstance.get('/users' + queryParams);
}

export const user = (id) => {
    return axiosInstance.get('/users' + '/' + id);
}
export const deleteUsers = (params) => {
    return axiosInstance.post('/users/delete', params);
}
export const resetpassword = (params) => {
    return axiosInstance.post('/auth/send-temp-password', params);
}
export const updatepassword = (params) => {
    return axiosInstance.post('/auth/admin/change-Password', params);
} 
