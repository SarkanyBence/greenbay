import Item from "../types/Item";
import itemRepo from "../repositories/itemRepository";
import TokenType from "../types/TokenType";
import ItemRecived from "../types/ItemRecived";
import ItemStatus from "../types/ItemStatus";

export = {
  fetchAllItemsToSell: async (): Promise<Item[]> => {
    return await itemRepo.findAllSellable();
  },
  saveNewItem: async (
    itemRecived: ItemRecived,
    user: TokenType
  ): Promise<Item> => {
    if (itemRecived === undefined) throw checkFields();
    Object.entries(itemRecived).forEach(([k, v]) => {
      if (v === "") throw checkFields(k);
    });

    let item: Item = new Item(itemRecived);
    item.userId = user.id;
    item.userName = user.userName;
    item.status = ItemStatus.SELLABLE;
    return await itemRepo.save(item);
  },
};

const checkFields = (field?: any): Object => {
  switch (field) {
    case "name":
      return { status: 422, message: "New item's name not defined!" };
    case "description":
      return { status: 422, message: "New item's description not defined!" };
    case "photoUrl":
      return { status: 422, message: "New item's photoUrl not defined!" };
    case "price":
      return { status: 422, message: "New item's price not defined!" };
    default:
      return { status: 422, message: "No item recived!" };
  }
};
