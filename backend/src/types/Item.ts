import ItemRecived from "./ItemRecived";
import ItemStatus from "./ItemStatus";

class Item {
  id?: number;
  name: string;
  description: string;
  photoUrl: string;
  price: number;
  status?: ItemStatus;
  createdAt?: number;
  userName?: string;
  userId?: number;

  constructor(itemRecived: ItemRecived) {
    this.name = itemRecived.name;
    this.photoUrl = itemRecived.photoUrl;
    this.description = itemRecived.description;
    this.price = parseInt(itemRecived.price);
  }
}

export default Item;
