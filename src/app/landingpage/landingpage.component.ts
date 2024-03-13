import { Component } from '@angular/core';
interface objectone{
  age:number,
  school:string,
  address:string
}
@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
// number, string,boolean,object,array,undefined
// inference, union

  public firstname:string|number|boolean=true
  public age:number=67
  public special:boolean=false
  public x:undefined|number|string

public obj:objectone={
  age:56,
  address:'Ogbomosho',
  school:'SQI'
}

public arrayone:number[]=[1,3,5]


  ngOnInit(){
    console.log(this.obj);
    
    let firstname=90
    let x
    x=56

  this.x=''
    this.firstname='Dammy'
    this.age=100
    console.log(this.firstname);
  }
}
