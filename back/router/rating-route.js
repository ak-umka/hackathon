import { Router } from "express";
import express from "express";
import auth from "../middlewares/auth-middlewares.js";
import ratingController from "../controllers/rating-controller.js";

const router = new Router();

router.post('/getSchool/:id/createRating', auth, ratingController.createRating);
router.get('/getSchool/:id/getRatings', ratingController.getRatings);
router.delete('/getSchool/:id/deleteRating/:ratingId', auth, ratingController.deleteRating);
export default router;