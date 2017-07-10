export interface User {
  id:number
  name:string
  username:string
  email:string
  address:Address

}

export interface Address {
  street:string
  suite:string
  city:string
  zipcode:string
  geo:geo
}
export interface geo {
  lng:string
  lat:string
}
