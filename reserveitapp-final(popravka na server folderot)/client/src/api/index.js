import axios from 'axios';

const API = axios.create( { baseURL: 'https://reserveit-backend.herokuapp.com' } );
axios.defaults.validateStatus=()=>{return true};
//const url="http://localhost:5000/posts";

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const fetchPosts=()=> API.get('/posts');

export const createPost=(newPost)=>API.post('/posts', newPost);


export const signIn = (formData)=>API.post('/user/signin', formData);

export const signUp = (formData)=>API.post('/user/signup', formData);