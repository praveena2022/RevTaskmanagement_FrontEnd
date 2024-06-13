import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AHomeComponent } from './Admin/a-home/a-home.component';
import { THomeComponent } from './TeamMember/t-home/t-home.component';

import {TSignupComponent} from './TeamMember/t-signup/t-signup.component';
import { Login1Component } from './Admin/a-signup/login1/login1.component';
import { ATasksComponent } from './Admin/a-tasks/a-tasks.component';
import { AProjectsComponent } from './Admin/a-projects/a-projects.component';
import { UserDashboardComponent } from './TeamMember/TaskDashboard/user-dashboard/user-dashboard.component';
import { ProjectDetailComponent } from './TeamMember/TaskDashboard/project-detail/project-detail.component';
import { ADashboardComponent } from './Admin/a-dashboard/a-dashboard.component';
import { PmNavbarComponent } from './ProjectManager/navbar/navbar.component';
import { ProjectManagerComponent } from './ProjectManager/project-manager/project-manager.component';
import {PMDashboardComponent } from './ProjectManager/dashboard/dashboard.component';
import { PMClientInfoComponent } from './ProjectManager/client-info/client-info.component';
import { PMProjectsComponent } from './ProjectManager/projects/projects.component';
import { TTasksComponent } from './TeamMember/TaskDashboard/t-tasks/t-tasks.component';
import { TaskAssignComponent } from './ProjectManager/task-assign/task-assign.component';
import { ProjectDetailsComponent } from './ProjectManager/project-details/project-details.component';
import { CreateTaskModalComponent } from './TeamMember/TaskDashboard/create-task-modal/create-task-modal.component';

import {PmFormComponent} from './Admin/Forms/pm-form/pm-form.component';
import { UFormComponent } from './Admin/Forms/uform/uform.component';
import { PmloginComponent } from './ProjectManager/pmlogin/pmlogin.component';
import { CreateProjectComponent } from './ProjectManager/create-project/create-project.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, 
  {
    path:'AdminHome',
    component:AHomeComponent
  },
  {
    path:'Memlogin',
    component:TSignupComponent
  },
  {
    path:"AdminLogin",
    component:Login1Component
  },
  {
    path:'AdminTasks',
    component:ATasksComponent
  },
  {
    path:'AdminProjects',
    component:AProjectsComponent,
    children:[
     { path: '', redirectTo: 'Ahome', pathMatch: 'full'},
     { path: 'AdminHome', component: AHomeComponent }]
  },
  {
    path:'AdminTasks',
    component:ATasksComponent
  },
  {
    path:'tHome',
    component:THomeComponent,
  },
  {
    path:'tUserDashboard',
    component:UserDashboardComponent
  },
  {
    path:'tUserProject',
    component:ProjectDetailComponent,
    
  },
  { path: "tUserProject/:projectId", component: ProjectDetailComponent },
  {
    path:'AdminDashboard',
    component:ADashboardComponent
  },
  
  {
    path:'PmHomePage',
    component:ProjectManagerComponent
  },
  {
    path:"PmnavBar",
    component:PmNavbarComponent
  },
  {
    path:"PMDashboard",
    component:PMDashboardComponent
  },
  {
    path:'PmClientInfo',
    component:PMClientInfoComponent
  },
  {
    path:'PMProjects',
    component:PMProjectsComponent
  },
  {
    path:'projects/:id/tTasks',
    component:TTasksComponent
  },
  {
    path:'projects/:id/assignPmTask',
    component:TaskAssignComponent
  },
  {
    path:'projects/:id/addMembers',
    component:ProjectDetailsComponent
  },
  {
    path:'tCreateTaskModalComponent',
    component:CreateTaskModalComponent
  },
  {
    path:'projects/createproject',
    component:CreateProjectComponent

  },
  {
    path:'pmform',
    component:PmFormComponent
  },
  {
    path:'uform',
    component:UFormComponent
  },
  {
    path:'PmLogin',
    component:PmloginComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
