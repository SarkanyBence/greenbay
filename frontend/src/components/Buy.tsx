import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/stateHooks";
import { fetchAllItems } from "../redux/ItemSlice";
import { StateType } from "../redux/store";
import ItemType from "../types/ItemType";
import BuyItem from "./BuyItem";

const Buy = () => {
  const items: ItemType[] = useAppSelector(
    (state: StateType) => state.items.items
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!items || items.length === 0 || items[0] === undefined)
      dispatch(fetchAllItems()).then((items) => {
        console.log("AFTER: ",items);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="base-container">
      <div className="item-container">
        {items &&
          items.length > 0 &&
          items[0] !== undefined &&
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
