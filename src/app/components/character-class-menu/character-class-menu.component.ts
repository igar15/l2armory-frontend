import { Component, OnInit } from '@angular/core';
import { CharacterClass } from 'src/app/common/character-class';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-class-menu',
  templateUrl: './character-class-menu.component.html',
  styleUrls: ['./character-class-menu.component.css']
})
export class CharacterClassMenuComponent implements OnInit {

  characterClasses: CharacterClass[];

  constructor(public characterService: CharacterService) { }

  ngOnInit(): void {
    this.listCharacterClasses();
  }

  listCharacterClasses() {
    this.characterService.getCharacterClasses().subscribe(
      data => {
        console.log('Character Classes=' + JSON.stringify(data));
        this.characterClasses = data;
      }
    );
  }

}
