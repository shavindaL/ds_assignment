import styles from '../styles/Shoppingcart.module.css';
import React, { useState } from 'react';

function Shopcart() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit', price: 12.99, quantity: 2 },
    { id: 2, name: 'Sorem ipsum dolor sit', description: 'Lorem ipsum dolor sit', price: 45.99, quantity: 1 }
  ]);

  const [discountRate] = useState(0.05);
  const [shippingRate] = useState(15.00);

  function updateQuantity(id, newQuantity) {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setProducts(newProducts);
  }

  function removeItem(id) {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  }

  function recalculateCart() {
    const subtotal = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    const discount = subtotal * discountRate;
    const shipping = subtotal > 0 ? shippingRate : 0;
    const total = subtotal - discount + shipping;

    return (
      <>
        <div className={styles.totalsItem1}>
          <label>Subtotal:</label>
          <div className="totals-value" id={styles.cartSubtotal}>{subtotal.toFixed(2)}</div>
        </div>
        <div className={styles.totalsItem2}>
          <label>Discount(5%):</label>
          <div className="totals-value" id={styles.cartDiscount}>{discount.toFixed(2)}</div>
        </div>
        <div className={styles.totalsItem3}>
          <label>Delivery:</label>
          <div className="totals-value" id={styles.cartShipping}>{shipping.toFixed(2)}</div>
        </div>
        <div className={styles.totalsItem4}>
          <label>Grand Total:</label>
          <div className="totals-value" id={styles.cartTotal}>{total.toFixed(2)}</div>
        </div>
      </>
    );
  }
    return ( 
        <>
        
            <h1>Shopping Cart</h1>

            <div class={styles.shoppingCart}>

                <div class={styles.columnLabels}>
                    <label class="product-image">Image</label>
                    <label class="product-details">Product</label>
                    <label class="product-price1">Price</label>
                    <label class="product-quantity1">Quantity</label>
                    <label class="product-removal1">Remove</label>
                    <label class="product-line-price1">Total</label>
                </div>

                {products.map((product) => (

                    <div className="product" key={product.id}>
                        <div className={styles.productImage}>
                            <img src={`img${product.id}.png`} alt={`${product.name} image`} />
                        </div>
                        <div className="product-details">
                            <div className={styles.productTitle}>{product.name}</div>
                            <p className={styles.productDescription}>{product.description}</p>
                        </div>
                        <div className={styles.productPrice}>{product.price.toFixed(2)}</div>
                        <div className={styles.productQuantity}>
                            <input
                                type="number"
                                value={product.quantity}
                                onChange={(event) => updateQuantity(product.id, parseInt(event.target.value))}
                                min="1"
                            />
                        </div>
                            <div className={styles.productRemoval}>
                                <button onClick={() => removeItem(product.id)}>Remove</button>
                            </div>
                            <div className={styles.productLinePrice}>{(product.price * product.quantity).toFixed(2)}</div>
                    </div>
                ))}

                <div className="totals">
                    {recalculateCart()}
                </div>

               <div className={styles.checkout}>
                    <button class={styles.checkout}>Checkout</button>
                </div>

            </div>
           
        </>
    );
}
 
export default Shopcart;