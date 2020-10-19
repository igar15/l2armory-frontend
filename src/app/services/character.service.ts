import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../common/character';
import { map } from 'rxjs/operators';
import { CharacterClass } from '../common/character-class';
import { Equipment } from '../common/equipment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  
  private baseUrl = "http://localhost:8080/api/characters";

  private classUrl = "http://localhost:8080/api/character-class?sort=name";

  private equipUrl = "http://localhost:8080/api/equipments/search/findByCharacterId?projection=equipmentProjection&";

  constructor(private httpClient: HttpClient) { }

  getCharacterListPaginate(thePage: number, thePageSize: number): Observable<GetResponseCharacters> {
    // need to build URL for all characters based on page and size
    const searchUrl = `${this.baseUrl}?projection=characterProjection&sort=level,desc&sort=name`
                    + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseCharacters>(searchUrl);
  }

  getCharacterList(): Observable<Character[]> {
      // need to build URL for all characters
      const searchUrl = `${this.baseUrl}?projection=characterProjection&sort=level,desc&sort=name`;

      return this.getCharacters(searchUrl);
  }

  getCharacterListByClassIdPaginate(thePage: number, thePageSize: number, theClassId: number): Observable<GetResponseCharacters> {
    // need to build URL based on class id, page and size
    const searchUrl = `${this.baseUrl}/search/findAllByCharacterClassId?projection=characterProjection&id=${theClassId}&sort=level,desc&sort=name`
                    + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseCharacters>(searchUrl);
  }

  getCharacterListByClassId(theClassId: number): Observable<Character[]> {
    // need to build URL based on class id
    const searchUrl = `${this.baseUrl}/search/findAllByCharacterClassId?projection=characterProjection&id=${theClassId}&sort=level,desc&sort=name`;

    return this.getCharacters(searchUrl);
  }

  searchCharacters(theKeyWord: string) {
    // need to build URL based on theKeyWord
    const searchUrl = `${this.baseUrl}/search/findAllByNameContainingIgnoreCase?projection=characterProjection&name=${theKeyWord}&sort=level,desc&sort=name`;

    return this.getCharacters(searchUrl);
  }

  searchCharactersPaginate(thePage: number, thePageSize: number, theKeyWord: string): Observable<GetResponseCharacters> {
    // need to build URL for all characters based on page and size
    const searchUrl = `${this.baseUrl}/search/findAllByNameContainingIgnoreCase?projection=characterProjection&name=${theKeyWord}&sort=level,desc&sort=name`
                    + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseCharacters>(searchUrl);
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

  getCharacterEquipment(theCharacterId: number): Observable<Equipment> {
    // need to build URL based on characterId
    const searchUrl = `${this.equipUrl}id=${theCharacterId}`;

    return this.httpClient.get<Equipment>(searchUrl);
  }

}

interface GetResponseCharacters {
  _embedded: {
    characters: Character[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseCharacterClasses {
  _embedded: {
    characterClasses: CharacterClass[];
  }
}
