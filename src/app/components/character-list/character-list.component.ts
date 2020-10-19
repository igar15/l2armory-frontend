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

  characters: Character[] = [];
  currentServerId: number = 100;
  previousServerId: number = 100;
  currentClassId: number;
  previousClassId: number;
  currentClassDescription: string;
  searchMode: boolean = false;

  //new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 2;
  theTotalElements: number = 0;

  previousKeyWord: string = null;

  constructor(private characterService: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentServerId = this.characterService.currentServerId;
    
    this.route.paramMap.subscribe(() => {
      this.listCharacters();
    });
  }

  listCharacters() {

    const serverChoice = this.route.snapshot.paramMap.has('serverId');
    if (serverChoice) {
      this.currentServerId = +this.route.snapshot.paramMap.get('serverId');
      if (this.currentServerId != this.previousServerId) {
        this.thePageNumber = 1;
        this.previousServerId = this.currentServerId;
      }
    }

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

      //check if we have a different class than previous
      //if we have a different class id than previous
      //then set thePageNumber back to 1

      if (this.previousClassId != this.currentClassId) {
        this.thePageNumber = 1;
      }

      this.previousClassId = this.currentClassId;

      console.log(`currentClassId=${this.currentClassId}, thePageNumber=${this.thePageNumber}, theCurrentServerId=${this.currentServerId}`);

      this.characterService.getCharacterListByServerIdAndClassIdPaginate(this.thePageNumber - 1, 
                                                        this.thePageSize, this.currentServerId, this.currentClassId).subscribe(this.processResult());

      this.characterService.getCharacterClass(this.currentClassId).subscribe(
        data => {
          this.currentClassDescription = data.description;
        }
      )
    }
    else {
      console.log(`currentClassId=${this.currentClassId}, thePageNumber=${this.thePageNumber}, theCurrentServerId=${this.currentServerId}`);
      this.characterService.getCharacterListByServerIdPaginate(this.thePageNumber - 1, this.thePageSize, this.currentServerId).subscribe(this.processResult());
    }
  }

  processResult() {
    return data => {
      this.characters = data._embedded.characters;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    }
  }

  updatePageSize(pageSize: number) {
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.listCharacters();
  }

  handleSearchCharacters() {
    const theKeyWord: string = this.route.snapshot.paramMap.get('keyWord');

    //if we have a different keyword than previous
    //then set thePageNumber to 1
    if (this.previousKeyWord != theKeyWord) {
      this.thePageNumber = 1;
    }

    this.previousKeyWord = theKeyWord;

    // now search for the characters using keyWord
    this.characterService.searchCharactersByServerIdPaginate(this.thePageNumber - 1,
                                                  this.thePageSize,
                                                  theKeyWord, this.currentServerId).subscribe(this.processResult());
  }

}
