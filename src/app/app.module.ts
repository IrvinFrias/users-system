import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { UsersFormComponent } from './Components/users-form/users-form.component';
import {FormModule} from "./Components/users-form/form.module";
import { UsersListComponent } from './Components/users-list/users-list.component';
import { UserSystemComponent } from './Components/user-system/user-system.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    UsersListComponent,
    UserSystemComponent,

  ],
  imports: [
    BrowserModule,
    FormModule,
    RouterModule.forRoot([
      {path: '', component: UserSystemComponent}
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
