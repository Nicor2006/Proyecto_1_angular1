import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ejemplo2Component } from '../ejemplo2/ejemplo2.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ejemplo3',
  standalone: true,
  imports: [Ejemplo2Component, RouterLink],
  templateUrl: './ejemplo3.component.html',
  styleUrl: './ejemplo3.component.scss'
})
export class Ejemplo3Component implements OnInit, OnDestroy{
  saludo='Ejemplo 3 works YUPIIIIIIIIIIIII ☺';
  imagenes = [
    "https://material.angular.io/assets/img/examples/shiba1.jpg",
    "https://www.coindesk.com/resizer/cby-7AmuhU_coYGCIk94K8MclIg=/1056x595/filters:quality(80):format(jpg)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/WMXJCFJ3ERCETA6TJNZ5NQPNKA.webp",
    "https://media.istockphoto.com/id/1297445091/es/foto/shiba-inu-perro-de-raza-japon%C3%A9s.jpg?s=612x612&w=0&k=20&c=xnpxH__7TbPe4QWJtJ-CbRt7ogkDecwxOW1kb9QE000=",
    "https://www.elmueble.com/medio/2023/02/26/perro-de-raza-shiba-inu_b6387407_230226130353_900x900.jpg"
  ]
  imageneActual = this.imagenes[0]
  constructor(){}

  ngOnInit(): void {
    console.log('Componente inicializado') //Siempre se llama ngOnInit
  }
  ngOnDestroy(): void {
    console.log('Componente DESTRUIDO YAAAAAAAAAAAAAAAAAH')//Siempre se llama ngOnDestroy
  }


  onEmit(mensaje: string){
    this.saludo = mensaje;
  }

  enviarImagen(indice : number){
    this.imageneActual =  this.imagenes[indice]
  }

}
