import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/common/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list-grid.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.listCharacters();
  }

  listCharacters() {
    this.characterService.getCharacterList().subscribe(
      data => {
        this.characters = data;
      }
    )
  }

}
