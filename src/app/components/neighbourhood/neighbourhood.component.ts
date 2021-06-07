import { Component, OnInit } from '@angular/core';
import { Neighbourhood } from '../../interfaces/neighbourhood'
import { NeighbourhoodService } from '../../service/neighbourhood/neighbourhood.service'

@Component({
  selector: 'app-neighbourhood',
  templateUrl: './neighbourhood.component.html',
  styleUrls: ['./neighbourhood.component.css']
})
export class NeighbourhoodComponent implements OnInit {

  neighbourhood: Neighbourhood[] = [] // Empty neighbourhood list

  constructor(private neighbourhoodservice: NeighbourhoodService) { }

  getNeighbourhood() {
    this.neighbourhoodservice.fetchData().subscribe(data => {
      this.neighbourhood = data;
      console.log(this.neighbourhood);
    }, error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
    this.getNeighbourhood();
  }

}
