import ItemRecived from "./ItemRecived";
import ItemStatus from "./ItemStatus";

class Item {
  id?: number;
  name: string;
  description: string;
  photoUrl: string;
  optUrl1?: string;
  optUrl2?: string;
  optUrl3?: string;
  optUrl4?: string;
  optUrl5?: string;
  price: number;
  status?: ItemStatus;
  createdAt?: number;
  sellerName?: string;
  sellerId?: number;

  constructor(itemRecived: ItemRecived) {
    this.name = itemRecived.name;
    this.photoUrl = itemRecived.photoUrl;
    this.optUrl1 = itemRecived.optUrl1;
    this.optUrl2 = itemRecived.optUrl2;
    this.optUrl3 = itemRecived.optUrl3;
    this.optUrl4 = itemRecived.optUrl4;
    this.optUrl5 = itemRecived.optUrl5;
    this.description = itemRecived.description;
    this.price = parseInt(itemRecived.price);
  }
}

export default Item;
