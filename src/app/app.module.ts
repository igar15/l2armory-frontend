import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from './services/character.service';
import { Routes, RouterModule } from '@angular/router';
import { CharacterClassMenuComponent } from './components/character-class-menu/character-class-menu.component';
import { SearchComponent } from './components/search/search.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { AccessoryDetailsComponent } from './components/accessory-details/accessory-details.component';
import { ArmorDetailsComponent } from './components/armor-details/armor-details.component';
import { ShieldDetailsComponent } from './components/shield-details/shield-details.component';
import { TypedArmorDetailsComponent } from './components/typed-armor-details/typed-armor-details.component';
import { WeaponDetailsComponent } from './components/weapon-details/weapon-details.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServerChoiceComponent } from './components/server-choice/server-choice.component';

const routes: Routes = [
  {path: 'server/:serverId', component: CharacterListComponent},
  {path: 'weapons/:id', component: WeaponDetailsComponent},
  {path: 'typed-armor/:type/:id', component: TypedArmorDetailsComponent},
  {path: 'shields/:id', component: ShieldDetailsComponent},
  {path: 'armor/:type/:id', component: ArmorDetailsComponent},
  {path: 'accessories/:type/:id', component: AccessoryDetailsComponent},
  {path: 'characters/:id', component: CharacterDetailsComponent},
  {path: 'search/:keyWord', component: CharacterListComponent},
  {path: 'class/:id', component: CharacterListComponent},
  {path: 'class', component: CharacterListComponent},
  {path: 'characters', component: CharacterListComponent},
  {path: '', redirectTo: '/server/100', pathMatch: 'full'},
  {path: '**', redirectTo: '/server/100', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterClassMenuComponent,
    SearchComponent,
    CharacterDetailsComponent,
    AccessoryDetailsComponent,
    ArmorDetailsComponent,
    ShieldDetailsComponent,
    TypedArmorDetailsComponent,
    WeaponDetailsComponent,
    ServerChoiceComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
