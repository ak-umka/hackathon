import { Router } from "express";
import multer from "multer";

import auth from "../middlewares/auth-middlewares.js";
import libraryController from "../controllers/library-controller.js";

const router = new Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/book");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/createLibrary', auth, upload.single("book"), libraryController.createLibrary);
router.get('/getLibraries', libraryController.getLibraries);
router.delete('/deleteLibrary/:id', auth, libraryController.deleteLibrary);

export default router;