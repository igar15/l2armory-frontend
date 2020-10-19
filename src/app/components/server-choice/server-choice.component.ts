import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/common/server';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-server-choice',
  templateUrl: './server-choice.component.html',
  styleUrls: ['./server-choice.component.css']
})
export class ServerChoiceComponent implements OnInit {

  servers: Server[];

  constructor(private characterService: CharacterService) { }

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

}
