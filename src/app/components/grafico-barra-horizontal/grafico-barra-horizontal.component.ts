import { Component, OnDestroy } from '@angular/core';
import { opcionesVotacion } from 'src/app/interfaces/interface';
import { VotaYaService } from 'src/app/services/vota-ya.service';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  opciones: opcionesVotacion[] = [];
  results: any[] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];
  

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

  constructor() {
    this.intervalo = setInterval(()=>{

      const newResults = [...this.results];
      for(let i in newResults){
        newResults[i].value = Math.round(Math.random()*500+1);
      }

      this.results = [...newResults];
    },1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  onSelect(event:any) {
    console.log(event);
  }
}
