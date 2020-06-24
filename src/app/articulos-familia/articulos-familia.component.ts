import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia } from '../models/ArticuloFamilia';
import { MockArticulosFamiliasService } from '../mock-articulos-familias.service';
@Component({
  selector: 'app-articulos-familia',
  templateUrl: './articulos-familia.component.html',
  styleUrls: ['./articulos-familia.component.css']
})
export class ArticulosFamiliasComponent implements OnInit {
  Titulo = "Articulos Familias";
  Items: ArticuloFamilia[] = [];
 
  constructor(
    private articulosFamiliasService:  MockArticulosFamiliasService
  ){}
 
  ngOnInit() {
    this.GetFamiliasArticulos();
  }
 
  GetFamiliasArticulos() {
    this.articulosFamiliasService.get()
    .subscribe((res:ArticuloFamilia[]) => {
      this.Items = res;
    });
  }
}
