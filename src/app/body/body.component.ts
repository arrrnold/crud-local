import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  idIntroducido: number = 0;
  nombreIntroducido: string = '';
  descripcionIntroducido: string = '';

  categorias: any[] = [
    {id: 20, nombre: "Alimentos", descripcion: "Alimentos para toda ocasión"},
    {id: 21, nombre: "Bebidas", descripcion: "Bebidas para toda ocasión"},
    {id: 22, nombre: "Hogar", descripcion: "Productos para el hogar"},
    {id: 23, nombre: "Limpieza", descripcion: "Productos de limpieza"},
    {id: 24, nombre: "Mascotas", descripcion: "Productos para mascotas"},
    {id: 25, nombre: "Salud", descripcion: "Productos para la salud"},
    {id: 26, nombre: "Tecnología", descripcion: "Productos tecnológicos"},
    {id: 27, nombre: "Vestuario", descripcion: "Productos de vestuario"}
  ];

  constructor() {
  }

  agregarCategoria() {
    this.categorias.push({
      id: this.idIntroducido,
      nombre: this.nombreIntroducido,
      descripcion: this.descripcionIntroducido,
    });

    this.resetearFormulario();
  }

  eliminarCategoria(categoria: any) {
    let indice = this.categorias.indexOf(categoria);
    this.categorias.splice(indice, 1);
  }

  private resetearFormulario() {
    this.idIntroducido = 0;
    this.nombreIntroducido = '';
    this.descripcionIntroducido = '';
  }

}

