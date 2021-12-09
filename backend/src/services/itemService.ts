import Item from "../types/Item";
import itemRepo from "../repositories/itemRepository";

export = {
  fetchAllItemsToSell: async (): Promise<Item[]> => {
    return await itemRepo.findAllSellable();
  },
};
