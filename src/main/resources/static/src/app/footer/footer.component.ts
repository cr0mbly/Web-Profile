import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.html',
  styleUrls: ['footer.component.css']
})

export class Footer implements OnInit{

  public footerOverflow:boolean;



  ngOnInit(){
    this.footerOverflow = window.innerHeight > window.screen.height;

  }
}
