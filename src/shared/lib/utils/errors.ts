import { ErrorStatusCode } from '@/shared/consts/errors';
export class AppError extends Error {
  public code: ErrorStatusCode;

  constructor(message: string, code: ErrorStatusCode) {
    super(message);
    this.name = 'AppError';
    this.code = code;
  }
}
