import {Component} from '@angular/core';
import {Resolve} from '@angular/router';
import {CryptonatorApiService} from "../sharedModules/CryptonatorApiService";

@Component({
  selector: 'shared-body-component',
  templateUrl: './sharedBody.component.html',
  styleUrls: ['./sharedBody.component.css']
})

export class SharedBody implements Resolve{

  private coinTypes = [];
  private tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'}
  ];

  constructor(private _CryptoApi:CryptonatorApiService){}
  resolve(){
    this._CryptoApi.getCoinTypes().subscribe(types => {
      for(let dataType in types.Data){
        this.coinTypes.push(types.Data[dataType]);
      }
      console.log(this.coinTypes);
    })
  };

  ngOnInit(){
  }


}
