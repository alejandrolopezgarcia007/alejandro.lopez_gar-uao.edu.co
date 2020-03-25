import { Component, OnInit } from '@angular/core';
import { Reporte } from '../models/reporte';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  providers: [ProjectService]
})
export class TablaComponent implements OnInit {

public nuevoReporte: String[];

  constructor(private _projectService: ProjectService) {
  //	this.reporteGeneral = new reporteGeneral('','','','','','','','','','');
  }

  ngOnInit(){
  //	console.log(this.reporteGeneral);
  	//console.log(this.nuevoReporte)
  //	this.nuevoReporte.push(reporte.nombre)
  }

  getReporte(){
  //	alert(this.mi_reporte)
  }
  addReporte(){
  //	this.nuevoReporte.push(this.mi_reporte);
  }

}
