import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {forbiddenNameValidator} from "./validators";
import {usersService} from "../../Services/users.service";
import {user} from "../../Types/form";
import {localstorage} from "../../Services/localstorage";


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit{
  //Atributes
  userForm!: FormGroup;
  statusForm: String = 'VALID';


   //Lifecycle
  constructor(private readonly fb: FormBuilder,
              private usersService: usersService,) {}

  ngOnInit(): void {
    this.userForm = this.initForm();
  }

  // Methods
  Submit (): void{
    if(this.userForm.status === "VALID"){
      this.usersService.addUser(this.userForm.value);
      this.userForm.reset();
      this.statusForm = 'VALID'
    }else{
      this.statusForm = 'INVALID';
    }
  }

  initForm(): FormGroup {
    return (this.fb.group({
      firstname: ['', [Validators.required,
        Validators.minLength(5),
        forbiddenNameValidator(/1234/i),
      ]],

      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(6)]]
    }))
  }

}
