import { Component, OnInit } from '@angular/core';
import { Business } from '../../interfaces/business';
import { BusinessService } from '../../service/business/business.service'

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  business: Business[] = []; // Empty business list

  constructor(private businessservice: BusinessService) { }

  getBusiness() {
    this.businessservice.fetchData().subscribe(data => {
      this.business = data;
      console.log(this.business);
    }, error => {
      console.log(error);
    })
  }

  updateBusiness(id: any, business: Business) {
    this.businessservice.update(id, this.business).subscribe((data) => {
      console.warn('data', data)
    })
    console.warn(id)
  }

  ngOnInit(): void {
    this.getBusiness();
  }

}
