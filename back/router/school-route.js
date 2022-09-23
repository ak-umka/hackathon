import { Router } from "express";
import { body } from "express-validator";
import multer from "multer";
import express from "express";

import auth from "../middlewares/auth-middlewares.js";
import SchoolControllers from "../controllers/school-controllers.js";

const router = new Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/createSchool', auth, upload.single("image"), SchoolControllers.createSchool);
router.get('/getSchools', SchoolControllers.getSchools);
router.get('/getSchool/:id', express.json(), SchoolControllers.getSchool);
router.put('/updateSchool/:id', auth, upload.single("image"), SchoolControllers.updateSchool);
router.delete('/deleteSchool/:id', auth, SchoolControllers.deleteSchool);


router.post('/getSchool/:id/createTeacher', auth, upload.single("image"), SchoolControllers.addTeacher);
router.delete('/getSchool/:id/deleteTeacher/:teacherId', auth, SchoolControllers.deleteTeacher);

export default router;