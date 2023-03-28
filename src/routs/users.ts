import express, { Request, Response } from 'express';
import controllers from '../controllers/users';

const router = express.Router();



router
  .post('/login', controllers.login)
  .post('/register', controllers.register);

export = router;