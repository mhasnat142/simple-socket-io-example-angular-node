import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  socket: any;

  constructor() {
    this.socket = io('http://localhost:3000');
  }
  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }
  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}
