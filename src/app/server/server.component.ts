import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
      .online {
          color: white;
      }
  `]

})
export class ServerComponent {
  serverStatus: string;

  constructor() {
     this.serverStatus = Math.random() < 0.5 ? 'offline' : 'online';
  }
  getServerId(): number {
    return this.getRandomInt(1000, 10000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }

  getColor() {
    return this.getServerStatus() === 'online' ? 'green' : 'red';
  }
}
