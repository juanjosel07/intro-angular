import { Component} from '@angular/core';


import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  

  // personajes:Personaje[]=[];

  nuevo:Personaje={
    nombre:'Maestro Roshi',
    poder:1000


  }
  
  // get personajes():Personaje[]{
    // return this.DbzService.personajes;
  // }
 


  // cambiarNombre(event:any){
    // console.log(event.target.value);
  // }

  // agregar( event:any){

    // agregarNuevoPersonaje(argumento:Personaje){
      // console.log('Main Pagee Component'); 
      // console.log(argumento); 
      // this.personajes.push(argumento)
    // }
  
    // constructor(private DbzService:DbzService){
    constructor(){

      // this.personajes= this.DbzService.personajes;

    }
}

