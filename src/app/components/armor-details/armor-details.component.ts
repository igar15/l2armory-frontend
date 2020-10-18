import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArmorItem } from 'src/app/common/armor-item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-armor-details',
  templateUrl: './armor-details.component.html',
  styleUrls: ['./armor-details.component.css']
})
export class ArmorDetailsComponent implements OnInit {

  armor: ArmorItem;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleArmorDetails();
    })
  }

  handleArmorDetails() {
    const armorId = +this.route.snapshot.paramMap.get('id');
    const armorType = this.route.snapshot.paramMap.get('type');

    if (armorType == 'boots') {
      this.itemService.getBoots(armorId).subscribe(
        data => {
          this.armor = data;
        }
      )
    }
    else if (armorType == 'gloves') {
      this.itemService.getGloves(armorId).subscribe(
        data => {
          this.armor = data;
        }
      )
    }
    else if (armorType == 'helmet') {
      this.itemService.getHelmet(armorId).subscribe(
        data => {
          this.armor = data;
        }
      )
    }

  }

}
