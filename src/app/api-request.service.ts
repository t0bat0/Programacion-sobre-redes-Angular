import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  public recetas:any
  private token: String = '';
  private url = 'http://localhost:9090/';
  private header = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('JWT_token') || '',
  });

  constructor(private http: HttpClient) {}

  Registro_Usuario(nombre: String, passw: String) {
    console.log(nombre);
    console.log(passw);

    this.http
      .post<any>(this.url + 'recetas/registro', {
        nombre: nombre,
        contraseña: passw,
      })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    return console.log('termino');
  }
  Ingreso_Usuario(nombre: String, passw: String) {
    console.log(nombre);
    console.log(passw);
    this.http
      .post<any>(this.url + 'recetas/ingreso', {
        nombre: nombre,
        contraseña: passw,
      })
      .subscribe(
        (response) => {
          localStorage.setItem('JWT_token', response.token);
        },
        (error) => {
          console.log(error);
        }
      );
    console.log(localStorage.getItem('JWT_token'));
  }

  Show_recetas() {
    this.http.get(this.url + 'recetas', { headers: this.header }).subscribe(
      (response) => {
        console.log(response);
        this.recetas=response
      },
      (error) => {
        console.log(error);
      }
    );
    return this.recetas
  }

  Ingresar_recetas(
    nombre: String,
    descripcion: String,
    cantidad: String,
    unidad: String
  ) {
    console.log(nombre);
    console.log(descripcion);
    console.log(cantidad);
    console.log(unidad);
    console.log(this.header);

    this.http
      .post(
        this.url + 'recetas',
        {
          nombre: nombre,
          descripcion: descripcion,
          cantidad: cantidad,
          medida: unidad,
        },
        { headers: this.header }
      )
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  Eliminar_receta(nombre: String) {
    this.http
      .delete(this.url + 'recetas/' + nombre, { headers: this.header })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  Cambiar_toda_la_receta( nombre: String,
    descripcion: String,
    cantidad: String,
    unidad: String){
      this.http.put(this.url+"recetas/"+nombre,{
      descripcion: descripcion,
      cantidad: cantidad,
      medida: unidad,
    },
    { headers: this.header }
      )
  .subscribe(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );

  }
  Actualizar_receta( nombre: String,
    descripcion: String,
    cantidad: String,
    unidad: String){
      this.http.patch(this.url+"recetas/"+nombre,{
      descripcion: descripcion,
      cantidad: cantidad,
      medida: unidad,
    },
    { headers: this.header }
      )
  .subscribe(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );

  }



}
