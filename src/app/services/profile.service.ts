import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'http://localhost:3000/api/users/';

  constructor(private http: HttpClient) {
    
   }

  getUserProfile(id: string) {
    return this.http.get(this.apiUrl+id);
  }

  updateUserProfile(id: string, body: any) {
    return this.http.put(this.apiUrl+id, body);
  }
}
