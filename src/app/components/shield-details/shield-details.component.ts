import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shield } from 'src/app/common/shield';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-shield-details',
  templateUrl: './shield-details.component.html',
  styleUrls: ['./shield-details.component.css']
})
export class ShieldDetailsComponent implements OnInit {

  shield: Shield;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleShieldDetails();
    })
  }

  handleShieldDetails() {
    const shieldId = +this.route.snapshot.paramMap.get('id');

    this.itemService.getShield(shieldId).subscribe(
      data => {
        this.shield = data;
      }
    )

  }

}
