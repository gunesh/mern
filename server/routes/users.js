import express from 'express'
import { getUsers } from '../controllers/users.js'
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("User Module")
});         // Default Message
router.get('/list', getUsers);     // List Users
router.post('/create', getUsers);  // Create User
router.delete('/user', getUsers);  // Delete User
router.get('/user/:id', getUsers); // User Details
export default router;