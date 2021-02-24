export interface Result {
  id: string;
  regNo: string;
  name: string;
  courses: Course[];
}
export interface Course {
  id: string;
  title: string;
  code: string;
  GPA?: number;
  grade?: string;
}
