import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listaPendientes:any[]=[];
  constructor(public deseosService:DeseosService, private router:Router) {   //comparto servicio con tab 2 y obtenemos una sola instancia en toda la app
      this.listaPendientes = deseosService.listas
  }


  agregarLista(){
    this.router.navigateByUrl('/tabs/tab1/agregar');   //lo mismo que navigate
  }

}
