import Item from "../types/Item";
import itemRepo from "../repositories/itemRepository";
import userRepo from "../repositories/userRepository";
import soldRepo from "../repositories/soldRepository";
import TokenType from "../types/TokenType";
import ItemRecived from "../types/ItemRecived";
import ItemStatus from "../types/ItemStatus";
import SoldItem from "../types/SoldItem";
import User from "../types/User";

export = {
  fetchAllItemsToSell: async (userId: number): Promise<Item[]> => {
    const items: Item[] = await itemRepo.findAllSellable();
    return items;
  },

  fetchSellItemsByUserId: async (userId: number): Promise<SoldItem[]> => {
    const items: SoldItem[] = await soldRepo.findAllBySellerId(userId);
    return items;
  },

  fetchBoughtItemsByUserId: async (userId: number): Promise<SoldItem[]> => {
    const items: SoldItem[] = await soldRepo.findAllByBuyerId(userId);
    return items;
  },

  saveNewItem: async (
    itemRecived: ItemRecived,
    user: TokenType
  ): Promise<Item> => {
    if (itemRecived === undefined) throw checkFields();
    Object.entries(itemRecived).forEach(([k, v]) => {
      if (!k.includes("optUrl")) if (v === "") throw checkFields(k);
    });

    let item: Item = new Item(itemRecived);
    item.sellerId = user.id;
    item.sellerName = user.userName;
    item.status = ItemStatus.SELLABLE;
    return await itemRepo.save(item);
  },

  buyItem: async (id: number, user: TokenType): Promise<Item> => {
    if (id === undefined) throw { status: 422, message: "No id provided" };
    let savedUser: User;
    try {
      savedUser = await userRepo.findByName(user.userName);
    } catch {
      throw { status: 422, message: "User not registered" };
    }
    let item = await itemRepo.sellItem(id);
    let soldItem: SoldItem = new SoldItem(item, savedUser);

    soldItem = await soldRepo.save(soldItem);

    return item;
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
