import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../common/character';
import { map } from 'rxjs/operators';
import { CharacterClass } from '../common/character-class';
import { Equipment } from '../common/equipment';
import { Server } from '../common/server';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  
  private baseUrl = "http://localhost:8080/api/characters";

  private classUrl = "http://localhost:8080/api/character-class?size=999&sort=name";

  private serverUrl = "http://localhost:8080/api/servers?sort=name";

  private equipUrl = "http://localhost:8080/api/equipments/search/findByCharacterId?projection=equipmentProjection&";
  
  currentServerId: number = 100;

  constructor(private httpClient: HttpClient) { }

  getCharacterListByServerIdPaginate(thePage: number, thePageSize: number, theServerId: number): Observable<GetResponseCharacters> {
    // need to build URL for all characters based on page and size
    const searchUrl = `${this.baseUrl}/search/findAllByServerId?projection=characterProjection&serverId=${theServerId}&sort=level,desc&sort=name`
                    + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseCharacters>(searchUrl);
  }

  getCharacterList(): Observable<Character[]> {
      // need to build URL for all characters
      const searchUrl = `${this.baseUrl}?projection=characterProjection&sort=level,desc&sort=name`;

      return this.getCharacters(searchUrl);
  }

  getCharacterListByServerIdAndClassIdPaginate(thePage: number, thePageSize: number, theServerId: number, theClassId: number): Observable<GetResponseCharacters> {
    // need to build URL based on class id, page and size
    const searchUrl = `${this.baseUrl}/search/findAllByServerIdAndCharacterClassId?projection=characterProjection&serverId=${theServerId}&id=${theClassId}&sort=level,desc&sort=name`
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

  searchCharactersByServerIdPaginate(thePage: number, thePageSize: number, theKeyWord: string, theServerId: number): Observable<GetResponseCharacters> {
    // need to build URL for all characters based on page and size
    const searchUrl = `${this.baseUrl}/search/findAllByServerIdAndNameContainingIgnoreCase?projection=characterProjection&serverId=${theServerId}&name=${theKeyWord}&sort=level,desc&sort=name`
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

  getServers(): Observable<Server[]> {

    return this.httpClient.get<GetResponseServers>(this.serverUrl).pipe(
      map(response => response._embedded.servers)
    );
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

interface GetResponseServers {
  _embedded: {
    servers: Server[];
  }
}
