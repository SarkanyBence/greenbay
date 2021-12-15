import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/stateHooks";
import { fetchAllItems } from "../redux/ItemSlice";
import { StateType } from "../redux/store";
import ItemType from "../types/ItemType";
import BuyItem from "./BuyItem";

const Main = () => {
  const items: ItemType[] = useAppSelector(
    (state: StateType) => state.items.items
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!items || items.length === 0 || items[0] === undefined)
      dispatch(fetchAllItems()).then((items) => {
        console.log("AFTER: ", items);
      });
  }, [dispatch, items]);

  return (
    <div className="base-container scrollable">
      <div className="item-container ">
        {items &&
          items.length > 0 &&
          items[0] !== undefined &&
          items.map((item) => (
            <div key={item.id}>
              <Link to={"buy/" + item.id}>
                <BuyItem item={item} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
