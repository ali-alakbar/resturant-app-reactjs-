import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {  } from "react";

function ThBody(props, { key }) {
  // ======== Start To get the Quantity ========
  // const [qty, setQty] = useState(1);
  // const getQty = (e) => {
  //   return setQty(e.target.value);
  // };
  // ======== End To get the Quantity ========

  return (
    <tr id={key}>
      <td className="product-remove product-icon">
        <FontAwesomeIcon
          onClick={() => props.onRemove(props.product)}
          icon={faClose}
        />
      </td>
      <td className="product-remove product-img">
        <img src={props.img} alt="" />
      </td>
      <td className="product-name">{props.productName}</td>
      <td className="product-price">${props.productPrice.toFixed(2)}</td>
      {/* <td className="product-quantity">
        <input
          type="number"
          onChange={(getQty)}
          className="number-qty"
        />{" "}
      </td>
      <td className="product-subtotal">
        ${(props.productPrice).toFixed(2)}
      </td> */}
    </tr>
  );
}

export default ThBody;
