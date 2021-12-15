import ItemDto from "./ItemDto";

class ItemType {
  id?: number;
  name?: string;
  description?: string;
  photoUrl?: string;
  optUrl1?: string;
  optUrl2?: string;
  optUrl3?: string;
  optUrl4?: string;
  optUrl5?: string;
  price?: number;
  sellerName?: string;
  status?: string;

  constructor(dto: ItemDto) {
    this.id = dto.id;
    this.name = dto.name;
    this.description = dto.description;
    this.photoUrl = dto.photoUrl;
    this.optUrl1 = dto.optUrl1;
    this.optUrl2 = dto.optUrl2;
    this.optUrl3 = dto.optUrl3;
    this.optUrl4 = dto.optUrl4;
    this.optUrl5 = dto.optUrl5;
    this.price = dto.price;
    this.sellerName = dto.sellerName;
    this.status = dto.status;
  }
}

export default ItemType;
