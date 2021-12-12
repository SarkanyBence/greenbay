import Item from "./Item";

type SellItem = {
  id: number;
  soldAt: number;
  itemId: number;
  sellerId: number;
  buyerId: number;
};

export default SellItem;
