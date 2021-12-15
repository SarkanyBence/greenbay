import Item from "./Item";
import User from "./User";

class SoldItem {
  id: number;
  soldAt: number;
  itemId: number;
  sellerId: number;
  buyerId: number;

  constructor(item: Item, buyer: User) {
    this.itemId = item.id;
    this.sellerId = item.sellerId;
    this.buyerId = buyer.id;
  }
}

export default SoldItem;
