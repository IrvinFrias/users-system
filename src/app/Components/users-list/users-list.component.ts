import {Component, OnInit} from '@angular/core';
import {usersService} from "../../Services/users.service";
import {user} from "../../Types/form";
import {localstorage} from "../../Services/localstorage";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  usersList: user[] = this.localstorage.getLocalStorage('users');

  constructor(private usersService: usersService,
              private localstorage: localstorage) { //se inyecta la dependencia
  }

  ngOnInit(): void {
    this.usersService.getUsers$().subscribe(users => {
      //this.usersList = users;
       this.localstorage.saveLocalStorage(users);

    }) //se suscribe al observable y devuelve un array de usuarios
  }


}
