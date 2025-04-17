import axios from 'axios';

const API_URL = import.meta.env.VITE_SERVER;
console.log(API_URL);

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});


// // Request Interceptor
// axiosInstance.interceptors.request.use(
//     config => {
//         // Get the token from localStorage or sessionStorage
//         const token = localStorage.getItem('token') || sessionStorage.getItem('token');
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

// // Response Interceptor
// axiosInstance.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         if (error.response) {
//             const { status } = error.response;
//             if (status === 401){
//                 // Unauthorized error, redirect to login page
//                 console.error('Unauthorized, redirecting to login');
//                 localStorage.removeItem('token');
//                 sessionStorage.removeItem('token');
//                 window.location.href = '/login';
//             }
//         }
//         return Promise.reject(error);
//     }
// );

export default axiosInstance;
