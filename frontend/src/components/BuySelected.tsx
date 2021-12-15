import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/stateHooks";
import { StateType } from "../redux/store";
import ItemType from "../types/ItemType";

function BuySelected() {
  const path: any = useLocation() as unknown as string;
  const pathId: number = parseInt(path.pathname.split("/")[2]);
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState("");

  const { id, name, description, price, sellerName, ...optUrls } =
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

const buyItem = (e:any) => {
  e.preventDefault();
   
}

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
            <p className="sellerName">
              <small>Vendor:</small> {sellerName}
            </p>
            <p className="description wrap"> {description}</p>
            <p className="price">
              {price!.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}HUF
            </p>
            <button
              onClick={() => {
                console.log("bought");
              }}
            >
              Buy
            </button>
              <Link to="/">&lt;&lt;</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuySelected;
