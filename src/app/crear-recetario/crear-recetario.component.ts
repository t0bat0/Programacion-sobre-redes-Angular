import { Component } from '@angular/core';
import { ApiRequestService } from '../api-request.service';

@Component({
  selector: 'app-crear-recetario',
  templateUrl: './crear-recetario.component.html',
  styleUrls: ['./crear-recetario.component.css']
})
export class CrearRecetarioComponent {
  recetas:any
  nombre:String = ""
  nombre_delete:String=""
  descripcion:String=""
  cantidad:String=""
  unidad:String=""

  constructor(private apiRequestService: ApiRequestService) {}






  inresar_receta(){
    
    this.apiRequestService.Ingresar_recetas(this.nombre,this.descripcion,this.cantidad,this.unidad)
  }
  
  mostrar_recetario(){
    this.recetas=this.apiRequestService.Show_recetas();

  }

  Eliminar_receta(){
    this.apiRequestService.Eliminar_receta(this.nombre_delete)
  }

  Cambiar_receta(){
    this.apiRequestService.Cambiar_toda_la_receta(this.nombre,this.descripcion,this.cantidad,this.unidad)
  }

  Actualizar_receta(){
    this.apiRequestService.Actualizar_receta(this.nombre,this.descripcion,this.cantidad,this.unidad)
  }

}
