import {Injectable} from "@angular/core";
import {user} from "../Types/form";


@Injectable({
  providedIn: 'root'
})
export class localstorage{
  // Attributes
  usersList: user[] = [];

  constructor() {}

  saveLocalStorage(listUsers : user[]): void {
    localStorage.setItem('users', JSON.stringify(listUsers))
  }
  getLocalStorage(key: string): user[]{
    const localStorageData = localStorage.getItem(key);
    let usersList: user[] = []
    if(localStorageData !== null){
      const users: user[] = JSON.parse(localStorageData);
      usersList = users;
    }else{
      console.log('no hay usuarios almacenados en el LS')
    }
    return usersList;
  }





}


