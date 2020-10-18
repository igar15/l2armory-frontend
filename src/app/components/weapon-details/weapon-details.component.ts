import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weapon } from 'src/app/common/weapon';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrls: ['./weapon-details.component.css']
})
export class WeaponDetailsComponent implements OnInit {

  weapon: Weapon;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleWeaponDetails();
    })
  }

  handleWeaponDetails() {
        const weaponId = +this.route.snapshot.paramMap.get('id');
        this.itemService.getWeapon(weaponId).subscribe(
          data => {
            this.weapon = data;
          }
        )

  }

}
