import ItemType from "../types/ItemType";
import BuyItem from "./BuyItem";

const Buy = () => {
  const items: ItemType[] = [
    new ItemType({
      id: 1,
      name: "dummy1",
      description: "Vásárolj Galaxy Z Fold3 5G okostelefont a webáruházban és Galaxy Watch4 Classic okosórát adunk ráadásként!",
      price: 300,
      photoUrl: "https://www.pikpng.com/pngl/b/98-985021_1-smart-tv-png-clipart.png",
    }),
    new ItemType({
      id: 2,
      name: "dummy2",
      description: "Vásárolj Galaxy Z Fold3 5G okostelefont a webáruházban és Galaxy Watch4 Classic okosórát adunk ráadásként!",
      price: 300,
      photoUrl: "https://www.pikpng.com/pngl/b/98-985021_1-smart-tv-png-clipart.png",
    }),
    new ItemType({
      id: 3,
      name: "dummy3",
      description: "Vásárolj Galaxy Z Fold3 5G okostelefont a webáruházban és Galaxy Watch4 Classic okosórát adunk ráadásként!",
      price: 300,
      photoUrl: "https://www.pikpng.com/pngl/b/98-985021_1-smart-tv-png-clipart.png",
    }),
    new ItemType({
      id: 4,
      name: "dummy4",
      description: "Vásárolj Galaxy Z Fold3 5G okostelefont a webáruházban és Galaxy Watch4 Classic okosórát adunk ráadásként!",
      price: 300,
      photoUrl: "https://www.pikpng.com/pngl/b/98-985021_1-smart-tv-png-clipart.png",
    }),
  ];
  return (
    <div className="base-container">
      <div className="item-container">
        {items &&
          items.map((item) => (
            <div key={item.id}>
              <BuyItem item={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Buy;
