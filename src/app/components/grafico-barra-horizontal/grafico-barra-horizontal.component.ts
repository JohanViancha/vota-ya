import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { opcionesVotacion } from 'src/app/interfaces/interface';
import { VotaYaService } from 'src/app/services/vota-ya.service';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements  OnInit {

  opciones: opcionesVotacion[] = [];
  @Input() results: any[] = [];
  

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo:any=null;

  constructor(private _votaYa: VotaYaService) {
    

  }
  ngOnInit(): void {
  }

  onSelect(event:any) {
    console.log(event);
  }
}
