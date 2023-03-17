import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  
  emailInput: string = "c'est bon pour vous?"

  constructor(private router:Router){

  }

  toSnapFace(){
    this.router.navigateByUrl("facesnaps")
  }
  ngOnInit(): void {
    
  }

  onSubmitForm(form : NgForm){
    console.log(form.value)
  }
}
