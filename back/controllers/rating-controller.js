import { validationResult } from "express-validator";

import ApiError from "../exceptions/api-error.js";
import School from "../models/school-model.js";
import ratingModel from "../models/rating-model.js";

class RatingController {
  async createRating(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequestError(errors.array(), "Validation failed"));
      }
      const review = new ratingModel({
        rating: req.body.rating,
        comment: req.body.comment,
        userId: req.user
      });
      console.log(review);
      await review.save();
      const school = await School.findById(req.params.id);
      school.ratings.push(review);
      await school.save();
      return res.json(school);
    } catch (error) {
      next(error);
    }
  }
  async getRatings(req, res, next) {
    try {
      const ratings = await ratingModel.find().populate({
        path: "userId",
        select: "email"
      });
      return res.json(ratings);
    } catch (error) {
      next(error);
    }
  }

  async deleteRating(req, res, next) {
    try {
      const rating = await ratingModel.findById(req.params.ratingId);
      if (!rating) {
        return next(ApiError.NotFoundError("Rating not found"));
      }
      await ratingModel.findByIdAndDelete(req.params.ratingId);
      return res.json({ message: "Rating deleted" });
    } catch (error) {
      next(error);
    }
  }

}

export default new RatingController();