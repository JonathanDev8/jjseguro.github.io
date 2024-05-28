import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
  
  registro:registroFormulario={
    name:"",
    email:"",
    password:"",
    repeatPassword:""
  };

  constructor() {
  }

  submit(){
    console.log("Datos de inicio de sesion...");
    console.log(this.registro.name);
    console.log(this.registro.email);
    console.log(this.registro.password);
    console.log(this.registro.repeatPassword);
  
    if(this.registro.password !== this.registro.repeatPassword){
      console.log("Hay que introducir contraseñas iguales para poder validarlo");
      //bota esto como mensaje de alerta.
      return;
    }
  }


  
}

interface registroFormulario{
  name:string;
  email:string;
  password:string;
  repeatPassword:string;
}