import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(

    private router:Router
  ) {

   }

  ngOnInit(): void {

 }
 
 isLogged():boolean{

  if(localStorage.getItem('token_pf')){
    return true;
    
  }else{
     return false;

  }
 
  }

  btnClick() {
      this.router.navigate(['/productores/nuevo']);

}

}
