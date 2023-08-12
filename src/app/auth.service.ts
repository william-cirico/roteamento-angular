import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  signIn() {
    this.isAuthenticated = true;
  }

  signOut() {
    this.isAuthenticated = false;
  }

  getStatus(): "online" | "offline" {
    return this.isAuthenticated ? "online" : "offline";
  }
}
