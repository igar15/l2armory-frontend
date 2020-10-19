import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Server } from 'src/app/common/server';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-server-choice',
  templateUrl: './server-choice.component.html',
  styleUrls: ['./server-choice.component.css']
})
export class ServerChoiceComponent implements OnInit {

  servers: Server[];

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit(): void {
    this.listServers();
  }

  listServers() {
    this.characterService.getServers().subscribe(
      data => {
        console.log('Servers=' + JSON.stringify(data));
        this.servers = data;
      }
    );
  }

  navigateTo(serverId: number) {
    this.characterService.currentServerId = serverId;
    this.router.navigateByUrl(`/server/${serverId}`);
  }

}
