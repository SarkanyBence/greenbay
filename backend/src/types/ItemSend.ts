import Item from "./Item";

class ItemSend {
  id: number;
  name: string;
  description: string;
  photoUrl: string;
  optUrl1?: string;
  optUrl2?: string;
  optUrl3?: string;
  optUrl4?: string;
  optUrl5?: string;
  price: number;
  sellerName: string;

  constructor(item: Item) {
    this.id = item.id;
    this.name = item.name;
    this.photoUrl = item.photoUrl;
    this.optUrl1 = item.optUrl1;
    this.optUrl2 = item.optUrl2;
    this.optUrl3 = item.optUrl3;
    this.optUrl4 = item.optUrl4;
    this.optUrl5 = item.optUrl5;
    this.description = item.description;
    this.price = item.price;
    this.sellerName = item.sellerName;
  }
}

export default ItemSend;
