import { BaseError } from "./base-error";

export class ValidationError extends BaseError {
  constructor(message) {
    super();
    this.message = message;
    this.name = "Validation error";
    this.status = 422;
  }
}
