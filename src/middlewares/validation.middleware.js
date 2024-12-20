import { ValidationError } from "sequelize";

export const ValidationMiddleware = (schema) => {
  return (req, _, next) => {
    const data = req.body;
    const { value, error } = schema.validate(data);
    if (error) {
      throw new ValidationError(error.message);
    }
    req.body = value;
    next();
  };
};
