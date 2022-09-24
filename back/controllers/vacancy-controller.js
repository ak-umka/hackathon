import { validationResult } from "express-validator";

import ApiError from "../exceptions/api-error.js";
import Vacancy from "../models/vacancy-model.js";
import School from "../models/school-model.js";

class VacancyController {
  async createVacancy(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Validation error", errors.array()));
      }
      const { title, description, salary, email, phone } = req.body;
      const vacancy = await Vacancy.create({
        title,
        description,
        salary,
        email,
        phone,
      });
      await vacancy.save();
      const school = await School.findById(req.params.id).populate({
        path: "vacancies",
      });
      school.vacancies.push(vacancy);
      await school.save();
      return res.json(vacancy);
    } catch (e) {
      next(e);
    }
  }
  async deleteVacancy(req, res, next) {
    try {
      const vacancy = await Vacancy.findById(req.params.vacancyId);
      if (!vacancy) {
        return next(ApiError.BadRequest("Vacancy not found"));
      }
      await Vacancy.findByIdAndDelete(req.params.vacancyId);
      return res.json({ message: "Vacancy deleted" });
    } catch (error) {
      next(error);
    }
  }
}

export default new VacancyController();