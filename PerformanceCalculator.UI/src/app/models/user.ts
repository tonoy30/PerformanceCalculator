export class User {
  email: string;
  displayName: string;
  token: string;
  avatar: string;
  role: Role;
}
export enum Role {
  Admin = 0,
  Teacher = 1,
  Student = 2,
}
