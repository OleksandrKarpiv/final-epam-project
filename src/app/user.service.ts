import { Injectable } from '@angular/core';
import { authInterface } from 'src/models/authInterface';
import { DataUser } from 'src/models/userInterface';
import { apiService } from 'src/service/service.user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  checkAuthUser(dataUser: DataUser): authInterface {
    return apiService.checkUserExistAndCheckPass(dataUser);
  }

  regUser(email: string): any {
    return apiService.registerUser(email);
  }
}
