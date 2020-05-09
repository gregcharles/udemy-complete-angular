import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  getServerId(): number {
    return this.getRandomInt(1000, 10000);
  }

  getServerStatus() {
    return Math.random() < 0.25 ? 'offline' : 'online';
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }
}
