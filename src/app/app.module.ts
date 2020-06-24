import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticulosFamiliaComponent } from './articulos-familia/articulos-familia.component';
import { MockArticulosFamiliasService } from './mock-articulos-familias.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, InicioComponent, ArticulosFamiliaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MockArticulosFamiliasService]
})
export class AppModule { }
