import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VaccinationCenter } from '../vaccination-center';
import { VaccinationService } from '../vaccination.service';

@Component({
  selector: 'app-center-detail',
  templateUrl: './center-detail.component.html',
  styleUrls: ['./center-detail.component.scss']
})
export class CenterDetailComponent implements OnInit {
  
  center?: VaccinationCenter
  
  constructor(private route: ActivatedRoute, private service: VaccinationService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.service.getAllVaccinationCenter().subscribe(resultCenters=>{
      this.center = resultCenters[id-1];
    });
  }

}
