import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  alloNewServer = false;
  serverName = '';
  serverCreationStatus = 'No server was created!';
  serverCreaeted = false;
  constructor() {
    setTimeout(() => {
      this.alloNewServer = true;
    }, 2000);
  }
  ngOnInit() {}
  onCreateServer() {
    this.serverCreaeted = true;
    this.serverCreationStatus =
      'server was created ! Server name is' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
