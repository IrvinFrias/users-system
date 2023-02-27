import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {UsersFormComponent} from "./users-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {usersService} from "../../Services/users.service";
import {localstorage} from "../../Services/localstorage";

@NgModule({
  declarations: [UsersFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [usersService, localstorage],

  exports: [
    UsersFormComponent
  ]
})
export class FormModule{}
