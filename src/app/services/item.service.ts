import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ring } from '../common/ring';
import { Earring } from '../common/earring';
import { Necklace } from '../common/necklace';
import { Boots } from '../common/boots';
import { Chest } from '../common/chest';
import { Gloves } from '../common/gloves';
import { Helmet } from '../common/helmet';
import { Legs } from '../common/legs';
import { Shield } from '../common/shield';
import { Weapon } from '../common/weapon';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private bootsBaseUrl = "http://localhost:8080/api/bootses";

  private chestBaseUrl = "http://localhost:8080/api/chests";

  private earringBaseUrl = "http://localhost:8080/api/earrings";

  private glovesBaseUrl = "http://localhost:8080/api/gloveses";

  private helmetBaseUrl = "http://localhost:8080/api/helmets";

  private legsBaseUrl = "http://localhost:8080/api/legses";

  private necklaceBaseUrl = "http://localhost:8080/api/necklaces";

  private ringBaseUrl = "http://localhost:8080/api/rings";

  private shieldBaseUrl = "http://localhost:8080/api/shields";

  private weaponBaseUrl = "http://localhost:8080/api/weapons";

  constructor(private httpClient: HttpClient) { }

  getRing(currentRingId: number): Observable<Ring> {
    const searchUrl = `${this.ringBaseUrl}/${currentRingId}`;
    return this.httpClient.get<Ring>(searchUrl);
  }

  getEarring(currentEarringId: number): Observable<Earring> {
    const searchUrl = `${this.earringBaseUrl}/${currentEarringId}`;
    return this.httpClient.get<Earring>(searchUrl);
  }

  getNecklace(currentNecklaceId: number): Observable<Necklace> {
    const searchUrl = `${this.necklaceBaseUrl}/${currentNecklaceId}`;
    return this.httpClient.get<Necklace>(searchUrl);
  }

  getBoots(currentBootsId: number): Observable<Boots> {
    const searchUrl = `${this.bootsBaseUrl}/${currentBootsId}`;
    return this.httpClient.get<Boots>(searchUrl);
  }

  getChest(currentChestId: number): Observable<Chest> {
    const searchUrl = `${this.chestBaseUrl}/${currentChestId}`;
    return this.httpClient.get<Chest>(searchUrl);
  }

  getGloves(currentGlovesId: number): Observable<Gloves> {
    const searchUrl = `${this.glovesBaseUrl}/${currentGlovesId}`;
    return this.httpClient.get<Gloves>(searchUrl);
  }

  getHelmet(currentHelmetId: number): Observable<Helmet> {
    const searchUrl = `${this.helmetBaseUrl}/${currentHelmetId}`;
    return this.httpClient.get<Helmet>(searchUrl);
  }

  getLegs(currentLegsId: number): Observable<Legs> {
    const searchUrl = `${this.legsBaseUrl}/${currentLegsId}`;
    return this.httpClient.get<Legs>(searchUrl);
  }

  getShield(currentShieldId: number): Observable<Shield> {
    const searchUrl = `${this.shieldBaseUrl}/${currentShieldId}`;
    return this.httpClient.get<Shield>(searchUrl);
  }

  getWeapon(currentWeaponId: number): Observable<Weapon> {
    const searchUrl = `${this.weaponBaseUrl}/${currentWeaponId}`;
    return this.httpClient.get<Weapon>(searchUrl);
  }



}
