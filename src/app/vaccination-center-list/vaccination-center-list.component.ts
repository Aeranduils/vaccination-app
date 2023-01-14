import { Component, OnInit } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';
import { VaccinationService } from '../vaccination.service';

@Component({
  selector: 'app-vaccination-center-list',
  templateUrl: './vaccination-center-list.component.html',
  styleUrls: ['./vaccination-center-list.component.scss']
})
export class VaccinationCenterListComponent implements OnInit {
  
  centers!: VaccinationCenter[];
  searchResult!: VaccinationCenter[];
  selected?: VaccinationCenter;

  searchTerm?: string;
  search?: String

  constructor(private service: VaccinationService) { }

  ngOnInit(): void {
    this.service.getAllVaccinationCenter().subscribe(resultCenters=>{
      this.centers = resultCenters;
    });
  }

  onDeleted(center: VaccinationCenter){
    delete this.selected;
    this.centers.splice(this.centers.indexOf(center), 1);
  }

  isSpecialCenter(center: VaccinationCenter){
    return center.city == "Nancy";
  }

  selectCenter(center: VaccinationCenter){
    this.selected=center;
  }

  filteredCenters(){
    if (this.searchTerm === undefined)
      this.searchTerm = ""

    // searchTerm! permet de dire a TS qu'on est conscient que l'objet peut etre undefined
    if (this.search == "city")
      this.searchResult = this.centers.filter(aCenter => aCenter.city.toLowerCase().includes(this.searchTerm!.toLowerCase()));
    else if (this.search == "name")
    this.searchResult = this.centers.filter(aCenter => aCenter.name.toLowerCase().includes(this.searchTerm!.toLowerCase().toString()));
  }

  selectSearch(search: String){
    this.search = search
  }

}
