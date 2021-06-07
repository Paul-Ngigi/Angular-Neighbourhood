import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../service/business/business.service'
import { Business } from '../../interfaces/business'

@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.css']
})
export class AddBusinessComponent implements OnInit {

  business: Business[] = []

  constructor(private businessservice: BusinessService) { }

  createBusiness(business: any) {
    this.businessservice.create(business).subscribe((data) => {
      console.warn("data" ,data)
    })
    console.warn(business)
  }

  ngOnInit(): void {
  }

}
