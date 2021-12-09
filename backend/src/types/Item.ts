import ItemStatus from "./ItemStatus";

type Item = {
  id?: number;
  name: string;
  description: string;
  photoUrl: string;
  price: number;
  status: ItemStatus;
  createdAt?: number;
  userId?: number;
};

export default Item;
