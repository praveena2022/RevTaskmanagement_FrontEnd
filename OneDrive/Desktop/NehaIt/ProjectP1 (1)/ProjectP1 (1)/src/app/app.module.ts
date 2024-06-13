
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './layout/login/login.component';
import { SignupComponent } from './layout/signup/signup.component';
import { ANavbarComponent } from './Admin/a-navbar/a-navbar.component';
import { AHomeComponent } from './Admin/a-home/a-home.component';
import { ADashboardComponent } from './Admin/a-dashboard/a-dashboard.component';
import { THomeComponent } from './TeamMember/t-home/t-home.component';
import { TNavbarComponent } from './TeamMember/t-navbar/t-navbar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PmFormComponent } from './Admin/Forms/pm-form/pm-form.component';
import { UFormComponent } from './Admin/Forms/uform/uform.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { Login1Component } from './Admin/a-signup/login1/login1.component';
import { AProjectsComponent } from './Admin/a-projects/a-projects.component';
import { ATasksComponent } from './Admin/a-tasks/a-tasks.component';
import { ChangeStatusModalComponent } from './TeamMember/TaskDashboard/change-status-modal/change-status-modal.component';
import { CreateTaskModalComponent } from './TeamMember/TaskDashboard/create-task-modal/create-task-modal.component';
import { EditTaskModalComponent } from './TeamMember/TaskDashboard/edit-task-modal/edit-task-modal.component';
import { ProjectDetailComponent } from './TeamMember/TaskDashboard/project-detail/project-detail.component';
import { UserDashboardComponent } from './TeamMember/TaskDashboard/user-dashboard/user-dashboard.component'; 
import { ProjectService } from './project.service';
import { TaskService } from './task.service';
import { UserServiceService } from './user-service.service';
import { TDashboardComponent } from './TeamMember/t-dashboard/t-dashboard.component';
import { PMClientInfoComponent } from './ProjectManager/client-info/client-info.component';
import { CreateTaskModalComponentComponent } from './ProjectManager/create-task-modal-component/create-task-modal-component.component';
import { PMDashboardComponent } from './ProjectManager/dashboard/dashboard.component';
import { ProjectDetailsComponent } from './ProjectManager/project-details/project-details.component';
import { ProjectManagerComponent } from './ProjectManager/project-manager/project-manager.component';
import { PMProjectsComponent } from './ProjectManager/projects/projects.component';
import { ResetPasswordComponent } from './ProjectManager/reset-password/reset-password.component';
import { TaskAssignComponent } from './ProjectManager/task-assign/task-assign.component';
import { PmNavbarComponent } from './ProjectManager/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ASideNavbarComponent } from './Admin/a-side-navbar/a-side-navbar.component';
import { CreateProjectComponent } from './ProjectManager/create-project/create-project.component';
import { TTasksComponent } from './TeamMember/TaskDashboard/t-tasks/t-tasks.component';
import { NgModule } from '@angular/core';
import { PmAuthService } from './pm-auth.service';
import { PmloginComponent } from './ProjectManager/pmlogin/pmlogin.component';
import { TSignupComponent } from './TeamMember/t-signup/t-signup.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ANavbarComponent,
    AHomeComponent,
    ADashboardComponent,
    THomeComponent,
    TNavbarComponent,
    NavbarComponent,
    PmFormComponent,
    UFormComponent,
    Login1Component,
    AProjectsComponent,
    ATasksComponent,
    ChangeStatusModalComponent,
    CreateTaskModalComponent,
    EditTaskModalComponent,
    ProjectDetailComponent,
    UserDashboardComponent,
    TDashboardComponent,
    PMClientInfoComponent,
    CreateTaskModalComponentComponent,
    PMDashboardComponent,
    ProjectDetailsComponent,
    ProjectManagerComponent,
    PMProjectsComponent,
    ResetPasswordComponent,
    TaskAssignComponent,
    PmNavbarComponent,
    ASideNavbarComponent,
    CreateProjectComponent,
    TTasksComponent,
    PmloginComponent,
    TSignupComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
   

    
    
  ],
  providers: [ProjectService, TaskService, UserServiceService, PmAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
