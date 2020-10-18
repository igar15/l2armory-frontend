import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypedArmor } from 'src/app/common/typed-armor';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-typed-armor-details',
  templateUrl: './typed-armor-details.component.html',
  styleUrls: ['./typed-armor-details.component.css']
})
export class TypedArmorDetailsComponent implements OnInit {

  typedArmor: TypedArmor;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleTypedArmorDetails();
    })
  }

  handleTypedArmorDetails() {
    const typedArmorId = +this.route.snapshot.paramMap.get('id');
    const typedArmorType = this.route.snapshot.paramMap.get('type');
    if (typedArmorType == 'chest') {
      this.itemService.getChest(typedArmorId).subscribe(
        data => {
          this.typedArmor = data;
        }
      )
    }
    else if(typedArmorType == 'legs') {
      this.itemService.getLegs(typedArmorId).subscribe(
        data => {
          this.typedArmor = data;
        }
      )
    }
  }

}
