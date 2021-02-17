import express from 'express';
import { getPosts } from '../controllers/posts.js';
import { createPost } from  '../controllers/posts.js';
import auth from '../middleware/auth.js';


const router= express.Router();

router.get('/', getPosts);
router.post('/',createPost); 



export default router;