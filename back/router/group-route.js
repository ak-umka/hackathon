import { Router } from "express";
import express from "express";

import auth from "../middlewares/auth-middlewares.js";
import groupController from "../controllers/group-controllers.js";

const router = new Router();

router.post("/getSchool/:id/createGroups", express.json(), auth, groupController.createGroups);
router.delete("/getSchool/:id/deleteGroups/:classId", express.json(), auth, groupController.deleteGroups);

export default router;