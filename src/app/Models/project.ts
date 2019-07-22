import { ProjectTime } from "./time";

export class Project {
    name: string;
    description: string;
    hours: Array<ProjectTime> = [];
}