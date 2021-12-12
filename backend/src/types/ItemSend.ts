import Item from "./Item";

class ItemSend {
  id: number;
  name: string;
  description: string;
  photoUrl: string;
  price: number;
  sellerName: string;

  constructor(item: Item) {
    this.id = item.id;
    this.name = item.name;
    this.photoUrl = item.photoUrl;
    this.description = item.description;
    this.price = item.price;
    this.sellerName = item.sellerName;
  }
}

export default ItemSend;
