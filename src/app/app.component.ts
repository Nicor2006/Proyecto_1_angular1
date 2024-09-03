import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', //Nombre al componente
  standalone: true, //Puede vivir sin modulos
  imports: [RouterOutlet], //Modulos, clases o componentes para que funcione
  templateUrl: './app.component.html',  //Conecta este archivo con el HTML
  styleUrl: './app.component.scss' //Conecta este arcivo con el CSS
})
export class AppComponent {
  title = 'Proyecto_1';
}
