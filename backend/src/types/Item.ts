import ItemStatus from "./ItemStatus";
import UserStatus from "./UserStatus";

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
