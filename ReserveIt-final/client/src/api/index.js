import axios from 'axios';

const API = axios.create( { baseURL: 'http://localhost:5000' } );
axios.defaults.validateStatus=()=>{return true};
//const url="http://localhost:5000/posts";



export const fetchPosts=()=> API.get('/posts');

export const createPost=(newPost)=>API.post('/posts', newPost);


export const signIn = (formData)=>API.post('/user/signin', formData);

export const signUp = (formData)=>API.post('/user/signup', formData);