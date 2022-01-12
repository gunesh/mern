import {Router} from 'express';
import posts from './posts.js';
import users from './users.js';
let rootRouter = Router();

rootRouter.use('/post',posts);
rootRouter.use('/user',users);

export default rootRouter;