import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { DropdownComponent } from './dropdown/dropdown.component';
import { StudentComponent } from './student/student.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AdminComponent } from './admin/admin.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { LoginComponent } from './login/login.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { AddusersComponent } from './addusers/addusers.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { BookdataComponent } from './bookdata/bookdata.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { LibrarianloginComponent } from './librarianlogin/librarianlogin.component';
import { HomesComponent } from './homes/homes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    DropdownComponent,
    StudentComponent,
    ViewUsersComponent,
    AdminComponent,
    LibrarianComponent,
    LoginComponent,
    BookdetailsComponent,
    AddusersComponent,
    UpdatebookComponent,
    StudentloginComponent,
    AddbookComponent,
    ViewbookComponent,
    BookdataComponent,
    UpdateuserComponent,
    DeleteuserComponent,
    LibrarianloginComponent,
    HomesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
