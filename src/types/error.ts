export interface ErrorType {
  status: number;
  name: string;
  message: string;
}

export interface StrapiErrorType {
  error: ErrorType;
}

export interface ErrorResponse {
  error: string;
  status: number;
}

export enum ErrorTypes {
  CALLBACK = 'Callback',
}
