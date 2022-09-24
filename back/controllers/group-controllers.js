import { validationResult } from "express-validator";

import ApiError from "../exceptions/api-error.js";
import groupModel from "../models/group-model.js";
import School from "../models/school-model.js";

class ClassController {
  async createGroups(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequestError(errors.array(), "Validation failed"));
      }
      const group = new groupModel({
        classNumber: req.body.classNumber,
        classDirection: req.body.classDirection,
        elementaryClass: req.body.elementaryClass,
        middleClass: req.body.middleClass,
        highClass: req.body.highClass,
      });
      await group.save();
      const school = await School.findById(req.params.id).populate({
        path: "groups",
      });
      school.groups.push(group);
      await school.save();
      return res.status(201).json(school);
    }
    catch (error) {
      next(error);
    }
  }

  async deleteGroups(req, res, next) {
    try {
      const group = await groupModel.findById(req.params.classId);
      if (!group) {
        return next(ApiError.BadRequest("Class not found"));
      }
      await groupModel.findByIdAndDelete(req.params.classId);
      return res.json({ message: "Class deleted" });
    } catch (error) {
      next(error);
    }
  }
}

export default new ClassController();