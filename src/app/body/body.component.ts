import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

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

}
