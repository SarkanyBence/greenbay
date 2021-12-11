import Item from "../../types/Item";
import ItemStatus from "../../types/ItemStatus";

export = {
  save: function (item: Item): Promise<Item> {
    return new Promise((resolve, reject) => {
      resolve({
        id: 1,
        name: item.name,
        description: item.description,
        photoUrl: item.photoUrl,
        price: item.price,
        status: ItemStatus.ACTIVE,
        createdAt: 100,
        userId: item.userId,
      });
    });
  },

  findAllByUserId: function (userId: number): Promise<Item[]> {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: 1,
          name: "string",
          description: "string",
          photoUrl: "string",
          price: 1,
          status: ItemStatus.ACTIVE,
          createdAt: 100,
          userId: userId,
        },
      ]);
    });
  },

  findAllSellable: function (): Promise<Item[]> {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: 1,
          name: "string",
          description: "string",
          photoUrl: "string",
          price: 1,
          status: ItemStatus.ACTIVE,
          createdAt: 100,
          userId: 1,
        },
      ]);
    });
  },
};
