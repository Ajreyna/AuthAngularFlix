import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedService {

  private token: string;

  get getToken(): string {
    return this.token;
  }
  constructor(private apiService: ApiService) { }

  async signup(username: string, password: string): Promise<any>{
  return await this.apiService.post('auth/signup', {username, password});
  }

  async login(username: string, password: string): Promise<void>{
    const response = await this.apiService.post('auth/login', {username, password});

    this.token = response.token;

    console.log(response.message);
  }
}
