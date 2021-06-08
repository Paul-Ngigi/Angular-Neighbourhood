import { Component, OnInit } from '@angular/core';
import { NeighbourhoodService } from 'src/app/service/neighbourhood/neighbourhood.service';
import { Neighbourhood } from '../../interfaces/neighbourhood'

@Component({
  selector: 'app-add-neighbourhood',
  templateUrl: './add-neighbourhood.component.html',
  styleUrls: ['./add-neighbourhood.component.css']
})
export class AddNeighbourhoodComponent {

  neighbourhood?:Neighbourhood[]=[];

  log(x:any) {console.log(x);}
  constructor(private neighbourhoodservice: NeighbourhoodService) { }

  // create 
  onSubmit(neighbourhood:any){
    this.neighbourhoodservice.create(neighbourhood).subscribe((result) =>{
      console.warn("result",result)
    })
    console.warn(neighbourhood)
  }
  ngOnInit(): void {
  }

}
