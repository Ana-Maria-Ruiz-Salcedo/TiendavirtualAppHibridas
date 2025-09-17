import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://fakestoreapi.com/auth/login'; // API de ejemplo
  private tokenKey = 'access_token';

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }) {
    return this.http.post<{ token: string }>(this.apiUrl, credentials);
  }

  async saveToken(token: string) {
    await Storage.set({ key: this.tokenKey, value: token });
  }

  async getToken(): Promise<string | null> {
    const result = await Storage.get({ key: this.tokenKey });
    return result.value;
  }

  async logout() {
    await Storage.remove({ key: this.tokenKey });
  }
}
