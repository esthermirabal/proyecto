import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  titulo: string;
  descripcion: string;
  nombreAlumno: string;
  nombreProfesor: string;
  material: string;

  tituloProperty: string;
  imagen: string;
  imagen2: string;
  tProperty: string;
  tProperty2: string;
  tituloEvent: string;
  textEvent: string;
  tIncuyo: string;
  numero1: number=5;
  numero2: number=10;
  sumaEvent: number;

  constructor(){
    this.titulo = "INTERPOLACION";
    this.descripcion = "Es una forma de hacer binding de datos en el template de un componente";
    this.nombreAlumno = "Esther";
    this.nombreProfesor = "Nicolas";
    this.material = '';
    this.tituloProperty = "Property Binding"
    this.imagen = "https://smartyoula.com/images/banners/event-banner-1654000549.jpg";
    this.imagen2 = "https://cdn2.hubspot.net/hubfs/53/como-hacer-una-pagina-web-en-html.jpg";
    this.tProperty = "Nombre";
    this.tProperty2 = "Apellido";
    this.tituloEvent = "Event Binding";
    this.textEvent = "Hola";
    this.tIncuyo = "INCUYO";
    this.sumaEvent = 0;
    
  }

  getMaterial(): string {
    return this.material = 'Angular';
  }

  cambiarTexto() {
    this.textEvent = "";
  }
//funcion
  sumar(){
    return this.numero1 + this.numero2;
  }

  restar(){
    return this.numero1 - this.numero2;
  }
}
