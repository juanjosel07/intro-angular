import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {  

  heroes:string[] = ['Spiderman','Hulk','Iroman','Thor'];
  heroeBorrado:string='';
 

borrarHeroe(){
  console.log('borrando...');
  this.heroeBorrado=this.heroes.shift() || '';
  // const longi = this.heroeBorrado1.length;
  
}

}
