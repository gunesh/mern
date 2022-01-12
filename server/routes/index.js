import {Router} from 'express';
import posts from './posts.js';
import users from './users.js';
let rootRouter = Router();


rootRouter.use('/v1/post',posts);
rootRouter.use('/v1/user',users);

export default rootRouter;