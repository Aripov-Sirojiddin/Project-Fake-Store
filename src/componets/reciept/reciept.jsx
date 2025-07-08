import styles from "./reciept.module.css";

export default function Reciept({ totalPrice }) {
  return (
    <div>
      <div>
        <p>Products total </p> <p>${totalPrice}</p>
      </div>
      <div>
        <p>Tax </p> <p> +${(totalPrice*0.06).toFixed(2)}</p>
      </div>
      <div>
        <p>Shipping </p> <p>$10.99</p>
      </div>
      <div>
        <h3>Total </h3> <p>{(totalPrice*1.06+10.99).toFixed(2)}</p>
      </div>
    </div>
  );
}
