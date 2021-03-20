import {Course} from './course';

export interface Student {
  'id'?: 'string';
  'firstName'?: 'string';
  'lastName'?: 'string';
  'email'?: 'user@example.com';
  'registrationNo'?: 'string';
  'phoneNo'?: 'string';
  'session'?: 'string';
  'courses'?: Course[];
}
