import Item from "./Item";

class ItemDto {
  id: number;
  name: string;
  description: string;
  photoUrl: string;
  price: number;

  constructor(item: Item) {
    this.id = item.id;
    this.name = item.name;
    this.photoUrl = item.photoUrl;
    this.description = item.description;
    this.price = item.price;
  }
}

export default ItemDto;
