import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
declare var io: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data:any;
  constructor(private webSocketService: WebsocketService) {}
  title = 'client2';
  ngOnInit(): void {
    this.webSocketService.listen('test-event').subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }
}
