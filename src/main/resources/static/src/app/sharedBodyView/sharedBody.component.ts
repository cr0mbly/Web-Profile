import {Component, OnInit} from '@angular/core';
import {CryptonatorApiService} from "../sharedModules/CryptonatorApiService";
import {RestQueryService} from "../sharedModules/restQueryService";

@Component({
  selector: 'shared-body-component',
  templateUrl: './sharedBody.component.html',
  styleUrls: ['./sharedBody.component.css']
})

export class SharedBody implements OnInit{
  private gridColumns = 10;
  private coinTypes : coinType[];
  private detailedCoin;

  constructor(private _CryptoApi: CryptonatorApiService){}

  ngOnInit(){
    this._CryptoApi.getCoinTypes().subscribe(types => {
      let result = [];
      for(let dataType in types.Data){
        types.Data[dataType].ImageUrl = this._CryptoApi.CryptoPaths.root + types.Data[dataType].ImageUrl;
        result.push(types.Data[dataType]);
      }
      console.log(types.Data);
      this.coinTypes = result;

      let width = window.screen.width;
      this.gridColumns = Math.floor(width / 100)
    });
  }

  onResize(event) {
    let elementWidth = event.target.innerWidth;
    this.gridColumns = Math.floor(elementWidth / 100);
  }

  getCoinDetail(coinID) {
    console.log(coinID);
    this._CryptoApi.getCoinSnapshot(coinID, "NZD").subscribe(response => {
      this.detailedCoin = response.Data;
      console.log(this.detailedCoin);
    })

  }


}

interface coinType {
  Algorithm : string
  CoinName : string
  FullName : string
  FullyPremined : number
  Id : string
  ImageUrl : string
  Name : string
  PreMinedValue : string
  ProofType : string
  SortOrder : string
  TotalCoinSupply : string
  TotalCoinsFreeFloat : string
  Url : string
}


