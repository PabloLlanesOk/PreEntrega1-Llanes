import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const { carrito } = useCart();

  const itemCount = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
  <Link to="/cart" style={{ position: 'relative', cursor: 'pointer' }}>
      <FaShoppingCart size={24} />
      <span style={{
        position: 'absolute',
        top: '-8px',
        right: '-10px',
        background: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px'
      }}>
        {itemCount}
      </span>
  </Link>
  );
};

export default CartWidget;
