import ItemDto from "./ItemDto";

class ItemType {
  id?: number;
  name?: string;
  description?: string;
  photoUrl?: string;
  price?: number;

  constructor(dto: ItemDto) {
    this.id = dto.id;
    this.name = dto.name;
    this.description = dto.description;
    this.photoUrl = dto.photoUrl;
    this.price = dto.price;
  }
}

export default ItemType;
