import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accessory } from 'src/app/common/accessory';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-accessory-details',
  templateUrl: './accessory-details.component.html',
  styleUrls: ['./accessory-details.component.css']
})
export class AccessoryDetailsComponent implements OnInit {

  accessory: Accessory;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleAccessoryDetails();
    })
  }

  handleAccessoryDetails() {
    const accessoryId = +this.route.snapshot.paramMap.get('id');
    const accessoryType = this.route.snapshot.paramMap.get('type');
    console.log(`id=${accessoryId}`);
    console.log(`type=${accessoryType}`);
    if (accessoryType == 'ring') {
      this.itemService.getRing(accessoryId).subscribe (
        data => {
          console.log(data);
          this.accessory = data;
        }
      )
    }
    else if (accessoryType == 'earring') {
      this.itemService.getEarring(accessoryId).subscribe (
        data => {
          console.log(data);
          this.accessory = data;
        }
      )
    }
    else if (accessoryType == 'necklace') {
      this.itemService.getNecklace(accessoryId).subscribe (
        data => {
          console.log(data);
          this.accessory = data;
        }
      )
    }
  }

}
