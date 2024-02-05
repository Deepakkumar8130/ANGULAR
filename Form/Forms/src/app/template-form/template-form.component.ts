import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  info:any = {
    userName :'',
    pass :''
  };
  user:any = {};
  isActive:boolean = false;

  

  storeData(data:NgForm){
   //console.log(data)
   this.user = data.value;
   this.info =this.user;
   this.isActive = true;
   data.reset();
  }

  restart(){
    this.isActive = false;
  }
}
