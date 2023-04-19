import styles from '@/styles/Shoppingcart.module.css';
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {

        clicks1: 0,
        clicks2: 0,
        show: true
    };
  }
  
  IncrementItem1 = () => {
    this.setState({ clicks1: this.state.clicks1 + 1 });
  }

  IncrementItem2 = () => {
    this.setState({ clicks2: this.state.clicks2 + 1 });
  }
 
  DecreaseItem1 = () => {
    if (this.state.clicks1 == 0) {
        return (0); 
      }
      else
        this.setState({ clicks1: this.state.clicks1 - 1 });
  }

  DecreaseItem2 = () => {
    if (this.state.clicks2 == 0) {
        return (0); 
      }
      else
        this.setState({ clicks2: this.state.clicks2 - 1 });
  }
 
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }
 

  render() {

    return ( 
        
        <>
            <body className={styles.cart}>
                <div className={styles.CartContainer}>

                    <div class={styles.Header}>
                        <h3 class={styles.Heading}>Shopping Cart</h3>
                        <a class={styles.Action}>Remove all</a>
                    </div>

                    <table className={styles.table}>
                        <tr>
                            <th className="t-header">Description</th>
                            <th className="t-header">Quantity</th>
                            <th className="t-header">Price</th>
                        </tr>
                    </table>

                    <div class={styles.CartItems}>

                        <div class={styles.imageBox}>
                            <img src="img1.png" style={{ height:"120px" }} />
                        </div>

                        <div class={styles.about}>
                            <h1 class={styles.title}>Lorem ipsum dolor sit</h1>
                            <h3 class={styles.subtitle}>Lorem ipsum dolor sit</h3>
                            
                        </div>

                        <div class={styles.counter}>
                            
                                <button class={styles.btn} onClick={this.IncrementItem1}>+</button>
                                { this.state.show ? <h2>{ this.state.clicks1 }</h2> : '' }
                                <button class={styles.btn} onClick={this.DecreaseItem1}>-</button>
                                
                        </div>

                        <div class={styles.prices}>
                            <div class={styles.amount}>$2.99</div>
                            <div class={styles.remove}><a>Remove</a></div>
                        </div>

                    </div>

                    <div class={styles.CartItems}>

                        <div class={styles.imageBox}>
                            <img src="img2.png" style={{ height:"120px" }} />
                        </div>

                        <div class={styles.about}>
                            <h1 class={styles.title}>Lorem ipsum dolor sit</h1>
                            <h3 class={styles.subtitle}>Lorem ipsum dolor sit</h3>
                        </div>

                        <div class={styles.counter}>
                            <button class={styles.btn} onClick={this.IncrementItem2}>+</button>
                            { this.state.show ? <h2>{ this.state.clicks2 }</h2> : '' }
                            <button class={styles.btn} onClick={this.DecreaseItem2}>-</button>
                        </div>

                        <div class={styles.prices}>
                            <div class={styles.amount}>$2.99</div>
                            <div class={styles.remove}><a>Remove</a></div>
                        </div>
                    </div>
                    
                    <div className={styles.checkout}>

                        <table className={styles.t2}>
                            <tr>
                                <th>Discount</th>
                                <input type="text" id={styles.price} name="code"></input>
                                <th>Delivery</th>
                                <input type="text" id={styles.price} name="code"></input>
                                <th>subtotal</th>
                                <input type="text" id={styles.price} name="code"></input>
                                <th>Total</th>
                                <input type="text" id={styles.price} name="code"></input>
                            </tr>
                        </table>

                        <div className={styles.txt}>
                            <input type="text" id={styles.code} name="code" placeholder="Please enter promotion code"></input>
                            <button class={styles.discountbtn}>Apply discount</button>
                            <button class={styles.checkoutbtn}>Checkout</button>
                        </div>

                    </div>
                  
                </div>
            </body>
        </>
     );
    
}
}
export default App;