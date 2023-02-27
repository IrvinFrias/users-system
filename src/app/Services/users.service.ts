import {user} from "../Types/form";
import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class usersService{
  private readonly users!: user[];
  private users$: Subject<user[]>


  constructor() {
    this.users = [];
    this.users$ = new Subject();
  }

  addUser(user: user){
    this.users.push(user);
    this.users$.next(this.users);
  }

  getUsers$(): Observable<user[]>{
    return this.users$.asObservable();
  }
}
