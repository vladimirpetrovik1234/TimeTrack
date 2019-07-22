import { Component, OnInit } from '@angular/core';
import { Project } from '../Models/project';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  newProject = new Project();
  editMode = false;

  constructor(public projectService: ProjectService, public router: Router) { }

  ngOnInit() {
  }

  addProject() {
    this.projectService.projects.push(this.newProject);
    this.newProject = new Project();
  }

  updateProject() {
    this.editMode = true;
    this.newProject = new Project();
  }

  viewProject(project) {
    this.projectService.currentProject = project;
    this.router.navigate(['project']);
  }


  startUpdateProject(projectToUpdate) {
    this.editMode = true;
    this.newProject = projectToUpdate;
  }

  deleteProject(projectToDelete) {
    let index = this.projectService.projects.indexOf(projectToDelete);
    this.projectService.projects.splice(index, 1);
  }
}
