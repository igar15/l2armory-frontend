import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/common/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list-grid.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];
  currentClassId: number;
  currentClassDescription: string;
  searchMode: boolean;

  constructor(private characterService: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listCharacters();
    });
  }

  listCharacters() {

    this.searchMode = this.route.snapshot.paramMap.has('keyWord');

    if (this.searchMode) {
      this.handleSearchCharacters();
    }
    else {
      this.handleListCharacters();
    }

  }

  handleListCharacters() {
    //check if "id" parameter is available
    const hasClassId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasClassId) {
      //get the "id" param string. convert string to a number using the "+" symbol
      this.currentClassId = +this.route.snapshot.paramMap.get('id');
      this.characterService.getCharacterListByClassId(this.currentClassId).subscribe(
        data => {
          this.characters = data;
        }
      )
      this.characterService.getCharacterClass(this.currentClassId).subscribe(
        data => {
          this.currentClassDescription = data.description;
        }
      )
    }
    else {
      this.characterService.getCharacterList().subscribe(
        data => {
          this.characters = data;
        }
      )
    }
  }

  handleSearchCharacters() {
    const theKeyWord: string = this.route.snapshot.paramMap.get('keyWord');
    // now search for the characters using keyWord
    this.characterService.searchCharacters(theKeyWord).subscribe(
      data => {
        this.characters = data;
      }
    );

  }

}
