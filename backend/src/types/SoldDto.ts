import Item from "./Item";
import SoldItem from "./SoldItem";
import User from "./User";

class SoldDto {
  id: number;
  soldAt: number;
  itemId: number;
  sellerId: number;
  buyerId: number;

  constructor(item: SoldItem) {
    this.id = item.id;
    this.soldAt = item.soldAt;
    this.itemId = item.itemId;
    this.sellerId = item.sellerId;
    this.buyerId = item.buyerId;
  }
}

export default SoldDto;
