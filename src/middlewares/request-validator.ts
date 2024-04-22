import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateUser = [
  body("username").isString().isLength({ min: 3 }),
  body("password").isString().isLength({ min: 6 }),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
