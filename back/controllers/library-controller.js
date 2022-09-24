import { validationResult } from "express-validator";

import ApiError from "../exceptions/api-error.js";
import Library from "../models/library-model.js";

class LibraryController {
  async createLibrary(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequestError(errors.array(), "Validation failed"));
      }
      const library = new Library({
        name: req.body.name,
        author: req.body.author,
        description: req.body.description,
        genre: req.body.genre,
        book: req.protocol + "://" + req.host + ":3001/" + req.file?.path,
      });
      await library.save();
      return res.status(201).json(library);
    } catch (error) {
      next(error);
    }
  }

  async getLibraries(req, res, next) {
    try {
      const libraries = await Library.find();
      if (!libraries) {
        return next(ApiError.BadRequestError("No libraries found"));
      }
      return res.json(libraries);
    } catch (error) {
      next(error);
    }
  }

  async deleteLibrary(req, res, next) {
    try {
      await Library.findByIdAndDelete(req.params.id);
      const libraries = await Library.findById(req.params.id);
      res.json({ message: "Library deleted", libraries });
    } catch (error) {
      next(error);
    }
  }
}

export default new LibraryController();