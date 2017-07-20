import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.html',
  styleUrls: ['footer.component.css']
})

export class Footer implements OnInit{

  public footerOverflow:boolean;



  ngOnInit(){

    console.log("dom height : " + window.innerHeight);
    console.log("window : " + window.screen.height);
    this.footerOverflow = window.innerHeight > window.screen.height;
    console.log(this.footerOverflow)

  }
}
