import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { DropdownComponent } from './dropdown/dropdown.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { AddusersComponent } from './addusers/addusers.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { BookdataComponent } from './bookdata/bookdata.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { LibrarianloginComponent } from './librarianlogin/librarianlogin.component';
import { HomesComponent } from './homes/homes.component';


const routes: Routes = [
  
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'bookdetails', component: BookdetailsComponent},
  {path: 'student', component: StudentComponent},
  {path: 'studentlogin', component: StudentloginComponent},
  {path: 'librarianlogin', component: LibrarianloginComponent},
  {path: 'adduser', component: AddusersComponent},
  {path: 'addbooks', component: AddbookComponent},
  {path: 'viewbook', component: ViewbookComponent},
  {path: 'viewusers', component: ViewUsersComponent},
  {path: 'bookdata', component: BookdataComponent},
  {path: 'updatebook', component: UpdatebookComponent},
  {path: 'deleteuser', component: DeleteuserComponent},
  {path: '', component: HomesComponent},
  {path: 'librarian',component: LibrarianComponent}
   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
