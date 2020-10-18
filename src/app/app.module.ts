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

const routes: Routes = [
  {path: 'characters/:id', component: CharacterDetailsComponent},
  {path: 'search/:keyWord', component: CharacterListComponent},
  {path: 'class/:id', component: CharacterListComponent},
  {path: 'class', component: CharacterListComponent},
  {path: 'characters', component: CharacterListComponent},
  {path: '', redirectTo: '/characters', pathMatch: 'full'},
  {path: '**', redirectTo: '/characters', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterClassMenuComponent,
    SearchComponent,
    CharacterDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
