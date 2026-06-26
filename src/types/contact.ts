export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';
