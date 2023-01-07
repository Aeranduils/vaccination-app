import { Component, OnInit } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center/vaccination-center';
import { VaccinationService } from '../vaccination.service';

@Component({
  selector: 'app-vaccination-center-list',
  templateUrl: './vaccination-center-list.component.html',
  styleUrls: ['./vaccination-center-list.component.css']
})
export class VaccinationCenterListComponent implements OnInit {

  

  centers!: VaccinationCenter[];

  selected?: VaccinationCenter;

  constructor(private service: VaccinationService) {}

  isSpecialCenter(center: VaccinationCenter){
    return center.city == "Nancy";
  }

  selectedCenter(center: VaccinationCenter){
    this.selected=center;
  }

  onDeleted(center: VaccinationCenter){
    delete this.selected;
    this.centers.splice(this.centers.indexOf(center), 1)
  }

  ngOnInit(): void {
    this.service.getAllVaccinationCenter().subscribe(resultCenters=>{
      this.centers = resultCenters;
    });
   
  }
  

}
