import { Router } from 'express';
import posts from './posts.js';
import users from './users.js';
import rootRoutes from './index.js'

const AppRoute = (app) => {
    app.use('/', rootRoutes);
}
export default AppRoute;