import Item from "../types/Item";
import itemRepo from "../repositories/itemRepository";

export = {
  fetchAllItemsToSell: async (): Promise<Item[]> => {
    return await itemRepo.findAllSellable();
  },
  saveNewItem: async (item: Item, userId: number): Promise<Item> => {
    if (item && item.name) {
      return await itemRepo.save(item);
    }
  },
};
