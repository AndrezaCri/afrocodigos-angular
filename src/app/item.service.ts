import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  setItemStorage(key: string, value: string) {
    this.logarTamanhoStorage();
    window.sessionStorage.setItem(key, value);
  }

  getItemStorage(key: string): string | null {
    this.logarTamanhoStorage();
    return window.sessionStorage.getItem(key);
  }

  clearStorage() {
    window.sessionStorage.clear();
  }

  removeItemStorage(key: string) {
    window.sessionStorage.removeItem(key);
  }

  private logarTamanhoStorage(){
    console.log(window.sessionStorage.length);
  }

}