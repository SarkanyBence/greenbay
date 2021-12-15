import PropsItem from "../types/PropsItem";

function BuyItem(props: PropsItem) {

  return (
    <div className="item">
      <div className="subitem-image">
        <img src={props.item.photoUrl} alt="itemPhoto" />
      </div>
      <div className="subitem">
        <p className="sellerName"> <small>Vendor:</small> {props.item.sellerName}</p>
        <p className="description wrap"> {props.item.description}</p>
        <p className="price">
          {props.item.price!.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}HUF
        </p>
      </div>
    </div>
  );
}

export default BuyItem;
