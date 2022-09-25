import { validationResult } from "express-validator";

import ApiError from "../exceptions/api-error.js";
import School from "../models/school-model.js";
import Teacher from "../models/teachers-model.js";

class SchoolController {
  async createSchool(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequestError(errors.array(), "Validation failed"));
      }
      const newSchool = new School({
        name: req.body.name,
        address: req.body.address,
        image: req.protocol + "://" + req.host + ":3000/" + req.file?.path,
        shortHistory: req.body.shortHistory,
        direction: req.body.direction,
      });
      await newSchool.save();
      return res.status(201).json(newSchool);
    } catch (error) {
      next(error);
    }
  }

  async getSchools(req, res, next) {
    try {
      const schools = await School.find().populate("teachers").populate({
        path: "ratings",
        populate: {
          path: "userId",
          select: "email"
        }
      }).populate("vacancies").populate("groups");
      return res.json(schools);
    } catch (error) {
      next(error);
    }
  }

  async getSchool(req, res, next) {
    try {
      const school = await School.findById(req.params.id).populate("teachers").populate({
        path: "ratings",
        populate: {
          path: "userId",
          select: "email"
        }
      }).populate("vacancies").populate("groups");
      return res.json(school);
    } catch (error) {
      next(error);
    }
  }

  async updateSchool(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequestError(errors.array(), "Validation failed"));
      }
      const school = await School.findById(req.params.id);
      if (req.file) {
        school.image = req.protocol + "://" + req.host + ":3001/" + req.file.path;
      }
      school.name = req.body.name;
      school.address = req.body.address;
      school.shortHistory = req.body.shortHistory;
      school.direction = req.body.direction;
      await school.save();
      return res.json(school);
    } catch (error) {
      next(error);
    }
  }

  async deleteSchool(req, res, next) {
    try {
      await School.findByIdAndDelete(req.params.id);
      return res.json({ message: "School deleted" });
    } catch (error) {
      next(error);
    }
  }

  async addTeacher(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequestError(errors.array(), "Validation failed"));
      }
      const teacher = new Teacher({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        image: req.protocol + "://" + req.host + ":3000/" + req.file.path,
        position: req.body.position,
        workExperience: req.body.workExperience,
      })
      await teacher.save();
      const school = await School.findById(req.params.id);
      if (!school) {
        return next(ApiError.BadRequestError("School not found"));
      }
      school.teachers.push(teacher);
      await school.save();
      return res.json(school);
    } catch (error) {
      next(error);
    }
  }

  async deleteTeacher(req, res, next) {
    try {
      const school = await School.findById(req.params.id);
      if (!school) {
        return next(ApiError.BadRequestError("School not found"));
      }
      const teacher = await Teacher.findById(req.params.teacherId);
      if (!teacher) {
        return next(ApiError.BadRequestError("Teacher not found"));
      }
      school.teachers = school.teachers.filter((teacher) => teacher._id.toString() !== req.params.teacherId);
      await school.save();
      await Teacher.findByIdAndDelete(req.params.teacherId);
      return res.json({ message: "Teacher deleted" });
    } catch (error) {
      next(error);
    }
  }

  async searchSchools(req, res, next) {
    try {
      const schools = await School.find(
        {
          "$or": [
            { "name": { "$regex": req.params.key, "$options": "i" } },
            { "direction": { "$regex": req.params.key, "$options": "i" } },
            // teachers is an array of teacher ids
            { "teachers": { "$in": await Teacher.find({ "firstname": { "$regex": req.params.key, "$options": "i" } }).select("_id") } },
            { "teachers": { "$in": await Teacher.find({ "lastname": { "$regex": req.params.key, "$options": "i" } }).select("_id") } },
          ],
        }
      ).populate("teachers").populate({
        path: "ratings",
        populate: {
          path: "userId",
          select: "email"
        }
      });
      return res.json(schools);
    } catch (error) {
      next(error);
    }
  }
}

export default new SchoolController();