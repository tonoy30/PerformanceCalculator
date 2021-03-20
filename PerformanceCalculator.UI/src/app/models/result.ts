export interface Result {
	id: string;
	regNo: string;
	name: string;
	courses: ResultCourse[];
}
export interface ResultCourse {
	id: string;
	title: string;
	code: string;
	GPA?: number;
	grade?: string;
}
