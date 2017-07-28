import {Component, OnInit} from '@angular/core';
import {CryptonatorApiService} from "../sharedModules/CryptonatorApiService";

@Component({
  selector: 'shared-body-component',
  templateUrl: './sharedBody.component.html',
  styleUrls: ['./sharedBody.component.css']
})

export class SharedBody implements OnInit{

  private coinTypes;

  constructor(private _CryptoApi:CryptonatorApiService){}


  ngOnInit(){
      console.log("loaded");
      this._CryptoApi.getCoinTypes().subscribe(response => {
        console.log(response.data);
        this.coinTypes = response;
      })


  }


}
