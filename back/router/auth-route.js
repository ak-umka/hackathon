import { Router } from 'express';
import { body } from 'express-validator';
import authControllers from '../controllers/auth-controllers.js';
import express from 'express';

const router = new Router();


router.post('/signup', express.json(),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  authControllers.signup
);

router.post('/signin', express.json(), authControllers.signin);
router.post('/logout', express.json(), authControllers.logout);
// router.get('/activate/:link', AuthController.activate);
router.get('/refresh', authControllers.refresh);
router.get('/users', authControllers.getUsers);


export default router;