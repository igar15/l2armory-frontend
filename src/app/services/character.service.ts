import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../common/character';
import { map } from 'rxjs/operators';
import { CharacterClass } from '../common/character-class';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  
  private baseUrl = "http://localhost:8080/api/characters";

  private classUrl = "http://localhost:8080/api/character-class?sort=name";

  constructor(private httpClient: HttpClient) { }

  getCharacterList(): Observable<Character[]> {
      // need to build URL for all characters
      const searchUrl = `${this.baseUrl}?sort=level,desc&sort=name`;

      return this.getCharacters(searchUrl);
  }

  getCharacterListByClassId(theClassId: number): Observable<Character[]> {
    // need to build URL based on class id
    const searchUrl = `${this.baseUrl}/search/findAllByCharacterClassId?id=${theClassId}&sort=level,desc&sort=name`;

    return this.getCharacters(searchUrl);
  }

  searchCharacters(theKeyWord: string) {
    // need to build URL based on theKeyWord
    const searchUrl = `${this.baseUrl}/search/findAllByNameContainingIgnoreCase?name=${theKeyWord}&sort=level,desc&sort=name`;

    return this.getCharacters(searchUrl);
  }

  private getCharacters(searchUrl: string): Observable<Character[]> {
    return this.httpClient.get<GetResponseCharacters>(searchUrl).pipe(
      map(response => response._embedded.characters)
    );
  }


  getCharacterClasses(): Observable<CharacterClass[]> {

    return this.httpClient.get<GetResponseCharacterClasses>(this.classUrl).pipe(
      map(response => response._embedded.characterClasses)
    );
  }

  getCharacterClass(currentClassId: number): Observable<CharacterClass> {
    return this.httpClient.get<CharacterClass>(`http://localhost:8080/api/character-class/${currentClassId}`);
  }

}

interface GetResponseCharacters {
  _embedded: {
    characters: Character[];
  }
}

interface GetResponseCharacterClasses {
  _embedded: {
    characterClasses: CharacterClass[];
  }
}
