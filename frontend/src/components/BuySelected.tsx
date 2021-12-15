import { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/stateHooks";
import { StateType } from "../redux/store";
import fetchData from "../services/fetchData";
import ItemType from "../types/ItemType";
import imgCard from "../images/visaCard.png";
import { updateItem } from "../redux/ItemSlice";

function BuySelected() {
  const path: any = useLocation() as unknown as string;
  const pathId: number = parseInt(path.pathname.split("/")[2]);
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState("");
  const dispatch = useAppDispatch();
  const history = useHistory();

  const { id, name, description, price, status, sellerName, ...optUrls } =
    useAppSelector(
      (state: StateType) =>
        state.items.items.find((item: ItemType) => item.id === pathId)!
    );

  useEffect(() => {
    if (optUrls) {
      setImg(optUrls.photoUrl!);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buyItem = (e: any) => {
    e.preventDefault();

    fetchData("PUT", `/items/${id}`).then((soldItem: ItemType) => {
      dispatch(updateItem(soldItem));
      history.push("/");
    });
  };

  return (
    <div className="base-container">
      {!loading && (
        <div className="details-container">
          <div className="detail-item">
            <div className="detail-img">
              <img src={img} alt="itemPhoto" />
            </div>
            <div className="detail-img-btn">
              {optUrls &&
                Object.entries(optUrls).map(
                  ([k, v]) =>
                    v !== null && <button onClick={() => setImg(v)} key={k} />
                )}
            </div>
          </div>
          <div className="detail-item">
            <p className="name">
              <small>Name:</small> {name}
            </p>
            <div className="sellerName">
              <p>
                <small>Vendor:</small> {sellerName}
              </p>
              <p className="status">{status}</p>
            </div>
            <p className="description wrap"> {description}</p>
            <p className="price">
              {price!.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}HUF
            </p>
            <button onClick={buyItem}>
              Pay with card <img src={imgCard} alt="card" />
            </button>
            <Link to="/">&lt;&lt;</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuySelected;
