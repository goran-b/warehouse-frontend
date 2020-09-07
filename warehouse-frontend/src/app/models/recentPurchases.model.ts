export class RecentPurchases{
    id: string;
    face: string;
    price:string;
    size:string
    recent:string[];
    
  

    constructor(id: string, face: string,price:string, size:string,recent: string[] ) {
        this.id = id;
        this.face = face;
        this.price = price;
        this.size= size;
        this.recent= recent;
     
    }
}