import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../Models/project';
import { ProjectTime } from '../Models/time';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  constructor(public projectService: ProjectService) { }

  currentProject: Project;
  totalAddedHours: number = 0;
  projectTime = new ProjectTime();

  ngOnInit() {
    this.currentProject = this.projectService.currentProject;
    for (const time of this.currentProject.hours) {
      this.totalAddedHours += time.time;
    }
  }

  addHours() {
    this.currentProject.hours.push(this.projectTime);
    this.totalAddedHours += this.projectTime.time;
    this.projectTime = new ProjectTime();
  }


}
