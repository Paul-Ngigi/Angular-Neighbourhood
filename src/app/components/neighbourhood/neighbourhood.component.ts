import { Component, OnInit } from '@angular/core';
import { Neighbourhood } from '../../interfaces/neighbourhood'
import { NeighbourhoodService } from '../../service/neighbourhood/neighbourhood.service'

@Component({
  selector: 'app-neighbourhood',
  templateUrl: './neighbourhood.component.html',
  styleUrls: ['./neighbourhood.component.css']
})
export class NeighbourhoodComponent implements OnInit {

  neighbourhood: Neighbourhood= {
    id: '',
    neighbourhood_name: '',
    location: '',
    count: '',
    admin: '',
  } 

  hoods:any 

  constructor(private neighbourhoodservice: NeighbourhoodService) { }

  getNeighbourhood() {
    this.neighbourhoodservice.fetchData().subscribe(data => {
      this.hoods = data;
      console.log(this.hoods);
    }, error => {
      console.log(error);
    })
  }

  deleteNeighbourhood(id: any) {
    this.neighbourhoodservice.delete(id).subscribe(response => {
      console.log(response);
    },
      error => {
        console.log(error);
      });
  }

  updateNeighbourhood(neighbourhood: Neighbourhood) {
    this.neighbourhoodservice.update(this.neighbourhood.id, neighbourhood).subscribe((data) => {
      console.warn('data', data)
    })
    console.warn(neighbourhood.id)
  }

  ngOnInit(): void {
    this.getNeighbourhood();
  }

}
