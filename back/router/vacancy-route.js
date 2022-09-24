import { Router } from "express";
import express from "express";

import auth from "../middlewares/auth-middlewares.js";
import vacancyController from "../controllers/vacancy-controller.js";

const router = new Router();

router.post("/getSchool/:id/createVacancy", express.json(), auth, vacancyController.createVacancy);
router.delete("/getSchool/:id/deleteVacancy/:vacancyId", express.json(), auth, vacancyController.deleteVacancy);

export default router;