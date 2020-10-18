import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipment } from 'src/app/common/equipment';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  equipment: Equipment;

  constructor(private characterService: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleCharacterDetails();
    })
  }

  handleCharacterDetails() {
    
    // get the "id" param string. convert string to a number using the "+" symbol
    const theCharacterId: number = +this.route.snapshot.paramMap.get('id');

    this.characterService.getCharacterEquipment(theCharacterId).subscribe(
      data => {
        this.equipment = data;
      }
    )

  }

}
