
export class Response {
  message: string;
}
export class Administrator {
  id: number;
  admername: string;
  password: string;
  user: User;
  Business: Business;
  food: Food;
}
export class Business {
  id: number;
  shopname: string;
  callphone: string;
  address: string;
}
export  class Food {
  id: number;
  foodno: string;
  foodname: string;
  price: number;
  total: number;
}
export  class  Shopping {
  id: number;
  no: string;
  food: Food;
}
export class User {
  id: number;
  username: string;
  password: string;
  callphone: string;
  address: string;
}
